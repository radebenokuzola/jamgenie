from flask import Flask, request, jsonify
from flask_cors import CORS  # Add this to fix CORS errors
import openai
import os

app = Flask(__name__)
CORS(app)  # Allow frontend to communicate with backend

# Load OpenAI API key from .env file
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/generate', methods=['POST'])
def generate_content():
    data = request.json
    prompt = f"Create a {data['platform']} post about {data['topic']} for {data['audience']}:"
    
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )
    return jsonify({"content": response.choices[0].message.content})

if __name__ == '__main__':
    app.run(debug=True)