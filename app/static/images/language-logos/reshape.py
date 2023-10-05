import os
from lxml import etree

desired_width = 200
desired_height = 200

# Get the current directory
current_directory = r"H:\Coding\personal-website\app\static\images\language-logos"

# Loop through all files in the current directory
for filename in os.listdir(current_directory):
    # Check if the file is an SVG (you may want to add more checks here)
    if filename.endswith(".svg"):
        # Create the full file paths
        input_file = os.path.join(current_directory, filename)
        output_file = os.path.join(current_directory, filename)

        # Load the SVG file
        tree = etree.parse(input_file)
        root = tree.getroot()

        # Update the width and height attributes
        root.set('width', str(desired_width))
        root.set('height', str(desired_height))

        # Save the modified SVG, overwriting the original file
        tree.write(output_file)

print("SVG files have been resized and replaced with the updated versions.")
