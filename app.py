# app.py
from flask import Flask, render_template
from PIL import Image
import pytesseract

app = Flask(__name__)

def extract_text_from_image(image_path):
    image = Image.open(image_path)
    text = pytesseract.image_to_string(image)
    return text

@app.route('/')
def index():
    image_path = "image.jpg"
    extracted_text = extract_text_from_image(image_path)
    return render_template('index.html', extracted_text=extracted_text)

if __name__ == '__main__':
    app.run(debug=True)
