import numpy as np
import nltk
import string
import random
import re
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import os
from dotenv import load_dotenv
import google.generativeai as genai

# Ensure necessary NLTK data packages are downloaded
nltk.download('punkt')
nltk.download('wordnet')
nltk.download('omw-1.4')

# ------------------ Hi-Lancer Chatbot Setup (TF-IDF-based) ------------------ #

# Reading the Corpus text
with open("hilancer.txt", 'r', errors='ignore') as f:
    raw_doc = f.read()

# Converting entire text to lowercase
raw_doc = raw_doc.lower()

# Removing colons and commas
raw_doc = re.sub(r'[:,]', '', raw_doc)

# Tokenizing the text into sentences and words
sentence_tokens = nltk.sent_tokenize(raw_doc)
word_tokens = nltk.word_tokenize(raw_doc)

# Split corpus into questions and answers
questions = []
answers = []
current_answer = []

for sentence in sentence_tokens:
    if sentence.endswith('?'):
        if questions:
            # Append the previous answer
            answers.append(' '.join(current_answer))
            current_answer = []
        questions.append(sentence)
    else:
        current_answer.append(sentence)

# Add the last answer if exists
if current_answer:
    answers.append(' '.join(current_answer))

# Ensure the number of answers matches questions
if len(answers) < len(questions):
    answers.append("I am sorry, I do not have an answer for that.")

# Text Preprocessing Steps
lemmer = nltk.stem.WordNetLemmatizer()

def LemTokens(tokens):
    return [lemmer.lemmatize(token) for token in tokens]

remove_punc_dict = dict((ord(punct), None) for punct in string.punctuation)

def LemNormalize(text):
    return LemTokens(nltk.word_tokenize(text.lower().translate(remove_punc_dict)))

# Initialize and fit the TF-IDF Vectorizer on the questions
TfidVec = TfidfVectorizer(tokenizer=LemNormalize, stop_words='english')
tfidf = TfidVec.fit_transform(questions)

# Function to generate response from Hi-Lancer chatbot
def hilancer_response(user_response):
    # Preprocess the user input
    user_response_processed = LemNormalize(user_response)
    user_response_processed = ' '.join(user_response_processed)  # Convert list back to string
    # Vectorize the user input
    tfidf_user = TfidVec.transform([user_response_processed])
    # Compute cosine similarity between user input and all questions
    vals = cosine_similarity(tfidf_user, tfidf)
    # Get the index of the most similar question
    idx = vals.argsort()[0][-1]
    # Get the highest similarity score
    flat = vals.flatten()
    flat.sort()
    req_tfidf = flat[-1]
    # Threshold to determine if the chatbot should fallback to Gemini API
    if req_tfidf < 0.3:  # Adjust the threshold based on performance
        return None  # Fallback to Gemini if similarity is too low
    else:
        return answers[idx]

# ------------------ Gemini API Chatbot Setup ------------------ #

# Load environment variables from the .env file
load_dotenv()

# Retrieve the API key from environment variables
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')
if GOOGLE_API_KEY is None:
    raise ValueError("API key is missing. Please set GOOGLE_API_KEY in your .env file.")

# Configure the Google Generative AI client with the API key
genai.configure(api_key=GOOGLE_API_KEY)

# Choose a model (e.g., 'gemini-pro')
model = genai.GenerativeModel('gemini-pro')

# Start a chat session
chat = model.start_chat(history=[])

# Function to generate response from Gemini API chatbot
def gemini_response(user_prompt):
    response = chat.send_message(user_prompt, stream=False)
    return ''.join(chunk.text for chunk in response if chunk.text)

# ------------------ Integrated Chatbot ------------------ #

def integrated_chatbot():
    print("Hello! I am your integrated ChatBot. You can ask me anything. To end the conversation, type 'bye'.")
    while True:
        user_response = input("You: ").lower()

        if user_response == 'bye':
            print('Bot: Call me whenever you need help!')
            break
        else:
            # Try to get a response from the Hi-Lancer chatbot
            bot_response = hilancer_response(user_response)
            
            if bot_response is None:
                # If no relevant answer found in Hi-Lancer, fallback to Gemini API
                print("Bot (Gemini):", gemini_response(user_response))
            else:
                # Return Hi-Lancer response
                print("Bot (Hi-Lancer):", bot_response)

# Run the integrated chatbot
integrated_chatbot()
