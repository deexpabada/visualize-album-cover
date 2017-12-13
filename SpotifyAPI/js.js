// browserify js.js -o bundle.js


var SpotifyWebApi = require('spotify-web-api-js');

var spotifyApi = new SpotifyWebApi({
  clientId: 'dfd789f848ac45dab9aafe737f717abc',
  clientSecret: 'fed50c0b74014e338f49d5416ac3ef9d',
  redirectUri: 'http://localhost:8888/callback'
});


//Access spotify --> refresh token every hour
spotifyApi.setAccessToken('BQBJ2NIWLT3CBN0mlaDTCgZVeRqGn3f-_sbtvMZvO-d5q5N8m0swnZHXwGTBfdXN9OGKfyhd-XfFOjZaQXP1GzjSV3mai9tsKdWtg7z4VUpAVzknyjLJQxiop3Fj6iBEiqoB9Sm3zkErCpeHiphtdGXXH-IU4uEyUw');

var tracks = [];
get tracks from Playlists
spotifyApi.getPlaylistTracks('spotify', '37i9dQZF1DX9tPFwDMOaN1', {offset: 0}, function(err, data) {
    if
      (err) console.error(err)

    else
      parseJson(data);
});




//i = 100 for real one
//parse Json (trackID, trackName, artistID, albumID, genreArray, releaseDate, popularity, tempo, albumArtURL)
function parseJson(data) {
  for (i = 0; i < 100; i++) {

    var track = new Track();
    tracks.push(track);

    var trackID = data['items'][i]['track']['id'];
    var trackName = data['items'][i]['track']['name'];
    var albumID = data['items'][i]['track']['album']['id'];
    var albumName =  data['items'][i]['track']['album']['name'];
    var artistID = data['items'][i]['track']['artists'][0]['id'];
    var artistName = data['items'][i]['track']['artists'][0]['name'];
    var albumArtURL = data['items'][i]['track']['album']['images'][0]['url'];
    var popularity = data['items'][i]['track']['popularity'];

    track.trackID = trackID;
    track.trackName = trackName;
    track.albumName = albumName;
    track.artistName = artistName;
    track.albumArtURL = albumArtURL;
    track.popularity = popularity;

    getDate(albumID, track);
    getGenres(artistID, track);
    getTempo(trackID, track);
  }
};

function Track () {
  this.trackID = "";
  this.trackName = "";
  this.albumName = "";
  this.artistName = "";
  this.albumArtURL = "";
  this.popularity = 0;
  this.releaseDate = "";
  this.genres = "";
  this.tempo = "";
}


//releaseDate
function getDate (albumID, track) {
  spotifyApi.getAlbum(albumID, function(err, data) {
    if (err)
      console.error(err);
    else
      var releaseDate = data['release_date'];
      test = releaseDate;
      track.releaseDate = releaseDate;
  });
};


//genres
function getGenres (artistID, track) {
  spotifyApi.getArtist(artistID, function(err, data) {
    if (err)
      console.error(err);
    else
      var genres = data['genres'];
      genres = String(genres);
      track.genres = genres;
  });
};

//tempo
function getTempo(trackID, track) {
  spotifyApi.getAudioFeaturesForTrack(trackID, function(err, data) {
    if (err) {
      console.error(err);
    }
    else
      var tempo = data['tempo'];
      track.tempo = tempo;
      // finalString += JSON.stringify(track);
      document.body.innerHTML += JSON.stringify(track);
  });
};
