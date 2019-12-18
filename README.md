## University of Denver 
## Class: DU_VIRT_FSF_PT_09_2019_U.O.MW
## Program: Full Stack Flex Online Part-Time
## 10- LIRI-node-app
...........................................................................................................

### _Language_ Interpretation and Recognition Interface (LIRI-Bot)

### About
For this project, I've created a LIRI bot. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### Objective
1. Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
2. Give a high-level overview of how the app is organized
3. Give start-to-finish instructions on how to run the app
4. Include screenshots, gifs or videos of the app functioning
5. Contain a link to a deployed version of the app
6. Clearly list the technologies used in the app
7. State your role in the app development

### App Use & Purpose
The app will allow a user to search the Bands in Town Artist Events API for an artist and show the name of the venue, venue location, and date of the event in the terminal. If no band is input, the program will comment, "You need to search a band". The app will also show the artist, songs name, a preview link of the song from Spotify, and the album of the song. If no song is provided, the program will default to "The Sign" by Ace of Base. The movieThis command will show the title, release year, IMDB rating, rotten tomatoes rating, production country, language, plot, and actors of the movie into the terminal. If no movie is provided, "Mr. Nobody" information will appear.

### Instructions
There are four different commands you can run: (1)concert-this, (2)spotify-this-song, (3)movie-this, (4)do-what-it-says. You must enter "node liri.js" + the command you want to run. Depending on which command is run, a concert will show up, a song, a movie, or the do-what-it-says command.

### GIFS/VIDEOS/SCREENSHOTS
Deployed App Here is the link to the deployed applications--> (https://github.com/sstott09/nodejs/blob/master/liri-node-app.js)

**Concert-this command**: 
![Foo Fighters]![Alt Text](https://github.com/sstott09/nodejs/blob/master/Assets/Images/spotify-this-learning_to_fly.png)
![DEFAULT]![Alt Text](https://github.com/sstott09/nodejs/blob/master/Assets/Images/concert-this-default.png)

**Spotify-this-song command**:
![Learning_to_Fly]![Alt Text](https://github.com/sstott09/nodejs/blob/master/Assets/Images/spotify-this-learning_to_fly.png)
![DEFAULT]![Alt Text](https://github.com/sstott09/nodejs/blob/master/Assets/Images/spotify-this-default.png)

**Movie-this command**:
![The_Godfather]![Alt Text](https://github.com/sstott09/nodejs/blob/master/Assets/Images/movie-this-the_godfather.png)
![DEFAULT]![Alt Text](https://github.com/sstott09/nodejs/blob/master/Assets/Images/movie-this-default.png)

**Do-what-it-says command**:
![DEFAULT]![Alt Text](https://github.com/sstott09/nodejs/blob/master/Assets/Images/do-what-it-says-default.png)

### Technologies Used
   **[Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)** 
   **[Axios](https://www.npmjs.com/package/axios)** 
     **[OMDB API](http://www.omdbapi.com)** 
     **[Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)** 
   **[Moment](https://www.npmjs.com/package/moment)** 
   **[DotEnv](https://www.npmjs.com/package/dotenv)** 
   **JavaScript**
   **node.js**
   **JSON**