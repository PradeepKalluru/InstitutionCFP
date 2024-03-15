from PIL import Image
import pytesseract
from PIL import Image

# Specify the path to the Tesseract executable
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR"

def extract_text_from_image(image_path):
    image = Image.open(image_path)
    text = pytesseract.image_to_string(image)
    return text

# Flask code...


# Example usage:
image_path = "image.jpg"
text = extract_text_from_image(image_path)
print(text)
