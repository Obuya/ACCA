
## Inspiration
 When pondering the vast emptiness of my life, during covid, I wondered if online mediums could replace a good old music sech, in the open grassy fields of campus. (oh oh tho I miss it).  


## What it does
Verse allows users to browse a variety of chat rooms sorted by genre. When joining a room, you can listen to playlists with other people as well as message them in real-time. It’s an innovative way to meet new friends, connect with old ones, and discover new music.

## How we built it

React.js was chosen over any other technology available since we needed to be able to develop something quick and stable while also being perfectly suited for our dynamic purposes. 

Google’s “Cloud Firestore” was used in order to store “listening rooms”. Each room’s own identifying IDs were stored in the cloud and fetched when needed to identify which user was sending messages to which room. Since the room was being stored as an object, setting up limits for the size of the rooms was easily integrated.

“Cloud Firestore” was again used for the storage and management of messages sent to the live chat for each room created by user actions. This was done by React’s ability to react properly to any change. 

## Challenges we ran into
The main challenge we faced was connecting everyone’s code into one, as well as picking up new knowledge in a short amount of time.

## Accomplishments that we're proud of
Some accomplishments we’re proud of include the design of the web app as well as getting a better understanding of technologies such as react and firebase

## What we learned
We learned the basics of firebase such as setting up a project and creating databases.
We also learned how to use react, for example creating components

## What's next for Verse
Time to fully-fledged out this spark of an idea, tho challenging, we do plan to fully develop this idea into a fully working product. 
<br>

## Runing it locally 
>
>## Getting Started with Create React App
>
>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
>
>## Available Scripts
>
>In the project directory, you can run:
?
>### `npm start`
>
>Runs the app in the development mode.\
>Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
>
>The page will reload if you make edits.\
>You will also see any lint errors in the console.
