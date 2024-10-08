#--------------------------commands-----------------------------------
# 1) python.exe -m pip install --upgrade pip
# 2) pip install python-dotenv google-generativeai
# 3) python gemini_bot.py

import os
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables from the .env file
load_dotenv()

# Retrieve the API key from environment variables
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')
if GOOGLE_API_KEY is None:
    raise ValueError("API key is missing. Please set GOOGLE_API_KEY in your .env file.")

# Configure the Google Generative AI client with the API key
genai.configure(api_key=GOOGLE_API_KEY)

# List available models
print("Available models:")
for model in genai.list_models():
    if 'generateContent' in model.supported_generation_methods:
        print(model.name)

# Choose a model (e.g., 'gemini-pro')
model = genai.GenerativeModel('gemini-pro')

# Start a chat session
chat = model.start_chat(history=[])

# Interactive chat loop
while True:
    prompt = input("Ask me anything: ")
    if prompt.lower() == "exit":
        break
    response = chat.send_message(prompt, stream=True)
    for chunk in response:
        if chunk.text:
            print(chunk.text)
