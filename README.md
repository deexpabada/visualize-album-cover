# Visualizing Music: Relationships Between Albums and Color

## Running the Program
To simply run the program, you can open the index.html file in any browser (Chrome recommended). The JS files and other libraries should load automatically, without having to download them. 
To replicate the program, you will have to download the following libraries that are used in this program: bundle.js, node, d3, bootstrap, browserify, urllib. 

## Introduction
 Album covers provide substantial contextual information about the music itself. Similar to books and their covers, music has album covers that may convey details about the music’s style, genre, mood, and time period. As noted by artists who create album covers, album art represent emotion, genre similarity, and other sociological implications that can help classify subjective aspects of music. In our study, we consider relationships between music and its associated cover art using both categorical and quantitative variables such as genre, release date, popularity, tempo, and release season.

## Motivation
We were interested in the idea of visualizing music by connecting various aspects of music and visual perception. Many studies have visualized the audio features of music, such as pitch, timbre, rhythm, and audio level. Usually, these studies analyze individual tracks and typically ignore an album’s cover art. Given the lack of studies that considered album covers in its discussions of music and visualization, we wanted to examine the relationship between an album’s attributes and the color of its album art.

## Results
Genre: Overall, all genres have many albums that lean towards gray or black. Jazz is most the colorful genre with high numbers for each color. Classical, Metal, and Hip-hop lean towards neutral colors. Pop and Jazz have a high proportion of blue-toned albums.

Year: Albums released before 1990 have a lot of albums that are gray and black. Starting in the 1990s to the 2010s, a lot more colors appear. The number of orange albums increase as the years increase.

Season: Spring has a lot more green albums than the other seasons. Summer has much more bright colors than neutral colors. Blue-toned albums are popular in the fall. Winter has more neutrals and greens than other colors.

Popularity: Tracks with popularity scores below 20 are often associated with black album art. For scores in the 20-40 range, red, brown, and gray were most popular. In the 40-80 range, an even mix of vibrant and neutral colors are present. For the 80-100 range, gray was the most popular album colors.

Tempo: For 60-80 bpm, green, gray, and white were more popular than others. From 80-140 bpm, there is a low proportion of pink and purple. From 140-210 bpm, neutral album covers were most prominent. 

## Implementation
![](https://github.com/deexpabada/visualize-album-cover/blob/master/Capture.PNG)
![](https://github.com/deexpabada/visualize-album-cover/blob/master/Capture2.PNG)
![](https://github.com/deexpabada/visualize-album-cover/blob/master/Capture3.PNG)

## Methods
Data collection: 	
To choose a representative sample of tracks for each decade and genre, playlists created by Spotify were used for each category considered. Data was extracted through the Spotify API to obtain album metadata for each track in the playlist. Our study considered more than 1000 albums that represented the most relevant albums within the 1960 - 2017 time period and the most popular genres of music. 

Image Parsing: 
We programmed an image parser to define the color of an album cover. Upon studying different samples of album covers, we realized that our perception of the color of an album is based on the background color of the album cover. Average rgb values for 100 points along the edge of the cover art is used to assign a color to each album. Colors are then categorized into 12 color bins. 

Visualization: 
 A spiral plot is used to visualize the relationship between album art and the album’s attributes to show all the data in a single display space. This allows viewers to compare subcategories more easily by minimizing memory load. Users can interact with the visualization to better perceive patterns across the categories as seen in the figures on the left. 

## Summary
The study finds significant correlations between album art colors and the albums’ attributes. One can draw meaningful conclusions about how an album cover’s color relates to the genre, release year, release season, tempo, and popularity of the album. This project opens up discussions on potential studies on the relationship between non-musical attributes of albums and the musical elements of the album. 

## Future Work
To augment the robustness of the study, the sample size of the albums considered should be increased. Moreover, the categories this study considers could be increased to include countries, the key of the music, and timbre for different perspectives. Improvements to the visualization can be made by adding more interactive features such as movable subcategories.  



