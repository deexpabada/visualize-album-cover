from PIL import Image
import pandas
import csv
from urllib.request import urlopen

def main():
    get_vertical_pixelList()
    get_horizontal_pixelList()

    r_values = 0
    g_values = 0
    b_values = 0

    for pixel in pixelList:
        r_values += pixel[0]
        g_values += pixel[1]
        b_values += pixel[2]

    average_r = int(r_values / len(pixelList))
    average_g = int(g_values / len(pixelList))
    average_b = int(b_values / len(pixelList))

    rgb = []
    rgb.append(average_r)
    rgb.append(average_g)
    rgb.append(average_b)
    rgbList.append(rgb)
    # print(pixelList)

def get_vertical_pixelList():
    for i in range(int(width/20)):
        pixel_location = i*width/20
        pixel_top = px[i*width/20,20]
        pixel_bottom = px[i*width/20,height-20]
        pixelList.append(pixel_top)
        pixelList.append(pixel_bottom)
        # break when bigger than image
        if (pixel_location == width-(width/20)):
            break


def get_horizontal_pixelList():
    for i in range(int(height/20)):
        pixel_location = i*height/20
        pixel_right = px[width-20,i*height/20]
        pixel_left = px[20, i*height/20]
        pixelList.append(pixel_right)
        pixelList.append(pixel_left)

        # break when bigger than image
        if (pixel_location == height-(height/20)):
            break


data = pandas.read_csv("data.csv", skiprows=[1], usecols=[4]);
data = data.values.tolist()
rgbList = []
for item in data:
#replace url with item
    img = Image.open(urlopen(item[0]))
    px = img.load()
    width, height = img.size

    pixelList = []
    main()

finalList = pandas.DataFrame(rgbList)
finalList.to_csv('rgb.csv', index=False)
