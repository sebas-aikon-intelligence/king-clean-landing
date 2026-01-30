from PIL import Image
import sys

try:
    img = Image.open(sys.argv[1])
    img = img.convert("RGBA")
    
    # Check corners
    corners = [
        (0, 0),
        (img.width - 1, 0),
        (0, img.height - 1),
        (img.width - 1, img.height - 1)
    ]
    
    print(f"Mode: {img.mode}")
    for pos in corners:
        pixel = img.getpixel(pos)
        print(f"Pixel at {pos}: {pixel}")
        
    # Check if alpha channel is used (if any pixel has alpha < 255)
    has_transparency = False
    for x in range(0, img.width, 10):
        for y in range(0, img.height, 10):
            if img.getpixel((x, y))[3] < 255:
                has_transparency = True
                break
    
    print(f"Has transparency: {has_transparency}")

except Exception as e:
    print(e)
