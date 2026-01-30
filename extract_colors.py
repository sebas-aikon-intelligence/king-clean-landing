from colorthief import ColorThief
import sys

try:
    color_thief = ColorThief(sys.argv[1])
    # get the dominant color
    dominant_color = color_thief.get_color(quality=1)
    # get the palette
    palette = color_thief.get_palette(color_count=5)
    
    print(f"Dominant: {dominant_color}")
    print(f"Palette: {palette}")
    
    # Convert to hex
    def rgb_to_hex(rgb):
        return '#%02x%02x%02x' % rgb
        
    print(f"Dominant Hex: {rgb_to_hex(dominant_color)}")
    print("Palette Hex:", [rgb_to_hex(c) for c in palette])
    
except Exception as e:
    print(e)
