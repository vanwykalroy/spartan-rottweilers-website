# ====================================================================
# HOW TO RUN THIS IN VS CODE:
# 1. Open VS Code and open the folder containing your image.
# 2. Open a new Terminal in VS Code (Ctrl+` or Terminal > New Terminal).
# 3. Install the required libraries by running:
#    pip install opencv-python numpy
# 4. Make sure your image file (e.g., 'spartan_rottweilers.jpg') is in 
#    the same folder, or update the file path in the main block below.
# 5. Click the "Run Python File" play button in the top right of VS Code.
# ====================================================================

import cv2
import numpy as np

def isolate_background(image_path):
    """
    Loads an image and demonstrates how to apply a bounding mask 
    or crop to isolate the background scenery.
    """
    # Load the source image
    img = cv2.imread(image_path)
    if img is None:
        print("Error: Could not load image. Check the file path.")
        return

    # Get image dimensions
    height, width, _ = img.shape

    # Example: Defining a bounding box for the background area to crop it
    # Based on the original composition, the Table Mountain range spans the upper half
    crop_ymin, crop_xmin = 0, 0
    crop_ymax, crop_xmax = int(height * 0.65), width  # Keep the top 65% of the image

    # Crop the background landscape
    background_cropped = img[crop_ymin:crop_ymax, crop_xmin:crop_xmax]

    # Save the isolated background result
    output_path = "isolated_background.jpg"
    cv2.imwrite(output_path, background_cropped)
    print(f"Successfully saved the isolated background section to {output_path}")

if __name__ == "__main__":
    # Replace with your actual local image file name
    isolate_background("spartan_rottweilers.jpg")
