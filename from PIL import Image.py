from PIL import Image
import pytesseract

def extract_text_from_image(image_path):
    # Open the image file
    image = Image.open(image_path)

    # Use Tesseract OCR to extract text
    text = pytesseract.image_to_string(image)

    return text

# Example usage:
image_path = "image.jpg"
text = extract_text_from_image(image_path)
print(text)
