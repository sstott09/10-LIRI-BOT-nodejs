// Read and set environment variables
require("dotenv").config();

// VARS
// var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios")
var moment = require("moment")

// VARS to capture user inputs
var command = process.argv[2];
var search = process.argv.slice(3).join(" ");

console.log("command: " + command);
console.log("search term :" + search)


var startProg = function (command, search) {
    switch (command) {
        case "concert-this":
            if (search == "") {
                console.log("You need to search a band");
            } else {
                getMyBands(search);
            }
            break;
        case "spotify-this-song":
            if (search == "") {
                getMeSpotify("Ace of Base - The Sign");
            } else {
                getMeSpotify(search);
            }
            break;
        case "movie-this":
            if (search == "") {
                getMovie("Mr Nobody");
            } else {
                getMovie(search);
            }
            break;
        case "do-what-it-says": doWhatItSays();
            break;
        default: console.log("I don't know what you are talking about");
    }
}

startProg(command, search);

//Funtion for Song Info: Spotify
function getMeSpotify(songName) {

    spotify.search(
        {
            type: 'track',
            query: songName,
            limit: 5
        },
        function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            var songs = data.tracks.items
            //console.log(JSON.stringify(songs))
            for (var i = 0; i < songs.length; i++) {
                console.log("-----------------");
                console.log("artist name:" + songs[i].artists[0].name);
                console.log("song name: " + songs[i].name);
                console.log("preview link:" + songs[i].preview_url);
                console.log("album: " + songs[i].album.name);
            }
        });
}
//Funtion for Band Info: Bands in Town
function getMyBands(bandNAME) {
    var queryURL = "https://rest.bandsintown.com/artists/" + bandNAME + "/events?app_id=codingbootcamp";
    axios.get(queryURL).then(function (res) {
        //console.log(res)
        const bandInfo = res.data;
        for (var i = 0; i < 5; i++) {
            console.log("Venue: " + bandInfo[i].venue.name + " " + bandInfo[i].venue.country + " " + bandInfo[i].venue.city);
            console.log("date and Time: " + moment(bandInfo[i].datetime).format("MM/DD/YYYY"));
            console.log("------------------------------------------------------");

        }
    })
}

//Funtion for Movie Info: OMDB
function getMovie(movieName) {
    var urlHit = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";
    axios.get(urlHit).then(function (res) {
        //console.log(res)
        const movieInfo = res.data;
        //console.log(movieInfo)
        console.log("Movie Name: " + movieInfo.Title);
        console.log("Released: " + movieInfo.Released);
        console.log("Plot: " + movieInfo.Plot);
        console.log("Actors: " + movieInfo.Actors);
        console.log("IMDB rating: " + movieInfo.imdbRating)

    })
}

//Funtion for Do What It Says Info: random.txt
function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        console.log(data)
        var dataArr = data.split(",");
        console.log(dataArr);
        startProg(dataArr[0], dataArr[1]);

    })
}
