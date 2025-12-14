#!/usr/bin/env python3
"""
Script to extract images from PDF slides for AMPAC website
"""
import fitz  # PyMuPDF
import os

# Input PDF path
pdf_path = "/Users/danielsouza/Desktop/SITE AMPAC .pdf"
output_dir = "/Users/danielsouza/portfolio-cultural/images"

# Create output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Open the PDF
pdf_document = fitz.open(pdf_path)

# Page mapping (0-indexed)
pages_to_extract = {
    0: "festivais-hero.jpg",      # Slide 1 - Festivais category background
    1: "festivais-internal.jpg",  # Slide 2 - Festivais internal page
    5: "ceramica-hero.jpg",       # Slide 6 - Cerâmica
    6: "dancas-hero.jpg",         # Slide 7 - Danças e Ritmos
    7: "ampac-sede.jpg",          # Slide 8 - AMPAC headquarters
}

# Extract specific pages as images
for page_num, filename in pages_to_extract.items():
    if page_num < len(pdf_document):
        page = pdf_document[page_num]

        # Render page to an image (300 DPI for high quality)
        mat = fitz.Matrix(300/72, 300/72)  # 300 DPI
        pix = page.get_pixmap(matrix=mat)

        # Save the image
        output_path = os.path.join(output_dir, filename)
        pix.save(output_path)
        print(f"Extracted page {page_num + 1} -> {filename}")

# Extract illustrations from slides 11-23 (pages 10-22 in 0-indexed)
for page_num in range(10, min(23, len(pdf_document))):
    page = pdf_document[page_num]

    # Render page to an image
    mat = fitz.Matrix(300/72, 300/72)  # 300 DPI
    pix = page.get_pixmap(matrix=mat)

    # Save as illustration
    filename = f"ilustracao-{page_num - 9:02d}.jpg"
    output_path = os.path.join(output_dir, filename)
    pix.save(output_path)
    print(f"Extracted illustration from page {page_num + 1} -> {filename}")

pdf_document.close()
print(f"\nAll images extracted to {output_dir}")
