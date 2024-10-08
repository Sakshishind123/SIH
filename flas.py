from flask import Flask, request, jsonify, render_template
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

app = Flask(__name__)

nltk.download('punkt')
nltk.download('wordnet')
nltk.download('omw-1.4')

# ------------------ Hi-Lancer Chatbot Setup (TF-IDF-based) ------------------ #

with open("hilancer.txt", 'r', errors='ignore') as f:
    raw_doc = f.read()

# Text Preprocessing
raw_doc = raw_doc.lower()
raw_doc = re.sub(r'[:,]', '', raw_doc)
sentence_tokens = nltk.sent_tokenize(raw_doc)
word_tokens = nltk.word_tokenize(raw_doc)

questions = []
answers = []
current_answer = []

for sentence in sentence_tokens:
    if sentence.endswith('?'):
        if questions:
            answers.append(' '.join(current_answer))
            current_answer = []
        questions.append(sentence)
    else:
        current_answer.append(sentence)

if current_answer:
    answers.append(' '.join(current_answer))

if len(answers) < len(questions):
    answers.append("I am sorry, I do not have an answer for that.")

lemmer = nltk.stem.WordNetLemmatizer()

def LemTokens(tokens):
    return [lemmer.lemmatize(token) for token in tokens]

remove_punc_dict = dict((ord(punct), None) for punct in string.punctuation)

def LemNormalize(text):
    return LemTokens(nltk.word_tokenize(text.lower().translate(remove_punc_dict)))

# Initialize and fit TF-IDF Vectorizer on questions
TfidVec = TfidfVectorizer(tokenizer=LemNormalize, stop_words='english')
tfidf = TfidVec.fit_transform(questions)

# Function to generate response from Hi-Lancer chatbot
def hilancer_response(user_response):
    user_response_processed = LemNormalize(user_response)
    user_response_processed = ' '.join(user_response_processed)
    tfidf_user = TfidVec.transform([user_response_processed])
    vals = cosine_similarity(tfidf_user, tfidf)
    idx = vals.argsort()[0][-1]
    flat = vals.flatten()
    flat.sort()
    req_tfidf = flat[-1]
    if req_tfidf < 0.3:
        return None
    else:
        return answers[idx]

# Gemini API Configuration
load_dotenv()
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel('gemini-pro')
chat = model.start_chat(history=[])

def gemini_response(user_prompt):
    response = chat.send_message(user_prompt, stream=False)
    return ''.join(chunk.text for chunk in response if chunk.text)


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get")
def get_bot_response():
    user_input = request.args.get('userMessage')  # Get user input from AJAX
    response = hilancer_response(user_input)
    if response is None:
        response = gemini_response(user_input)
    return jsonify(response)  # Send bot response as JSON

if __name__ == "__main__":
    app.run(debug=True)



