# The Movie App

#### Blindside GmbH Coding Challenge

A movie app with locally-fetched videos and google security

## Instructions

- Create a UI to browse videos
- Videos should be loaded as persistent data
- An overview page of all videos should be shown
- Users can toggle comments on and off
- Users can leave comments on the UI but should not be saved
- Related videos should be shown on the video UI
- The system should be protected by a login
- Login should authenticate against a separate service

## Development

The app was built with React, Redux, Google OAuth and Tailwind CSS

#### Project Structure

- [**Dummy Data**] - This simulates a data that could be gotten from a backend or an API. The data consist of an array os objects, each object representing a movie with the following properties: _title, slug, description, rating, backdrop, url, genre, tags, duration and comments_.
- [Components Folder] - All reuseable components were grouped into this folder. These components are - **Layout, Comments, MovieCard, Navbar, Rating and Related**. These components were created to allow reuseability, easy maintenance and keep a lightweight file structure.
- [Pages Folder] - This folder houses elements that are not reusable and routes that have to be navigated to. For example - _the movie details page and an overview of all movies page_.
- [features] - The features folder houses the google login and authentication functionality
- [.env] - The _**.env**_ file contains all sensitive data like google authentication ID.
-

### File Tree

```
├── README.md
├── package.json
├── postcss.config.js
├── public
│   ├── Black or White.mp4
│   ├── Blossom.mp4
│   ├── Dive.mp4
│   ├── Keep Breathing.mp4
│   ├── Race Beyond.mp4
│   ├── The Greens.mp4
│   ├── The Hills.mp4
│   ├── The White Winter.mp4
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.js
│   ├── Store.js
│   ├── components
│   │   ├── Comments.js
│   │   ├── Layout.js
│   │   ├── Moviecard.js
│   │   ├── Navbar.js
│   │   ├── Rating.js
│   │   └── Related.js
│   ├── dummyData.js
│   ├── features
│   │   └── userDetails
│   │       └── userDetailsSlice.js
│   ├── index.css
│   ├── index.js
│   └── pages
│       ├── Login.js
│       ├── MovieDetails.js
│       └── Movies.js
├── tailwind.config.js
└── yarn.lock
```

## Explanation

- ### Creating the UI
  I designed the app to have a home page where users are prompted to sign in, a movies page that shows all available movies, and a page that shows the details of any chosen video. All designs were implemented using **Tailwind CSS**.
- ### Loading persistent videos
  In order to achieve this, and not use YouTube; as instructed, the videos are fetched from the _**url**_ provided in the _**dummy data**_. The **url** points to video files saved locally in the **public** folder of the project.
- ### Overview page of all videos
  All videos are fetched from the **dummy data** and displayed on the movies page using a **Movie Card component**. The Movie card component accepts a _Movies prop_ from which _title, and tags_ are destructured and displayed. In the future, or in a situation where there are no constraints, these movies could be fetched from an API.
- ### Comments
  Comments were fetched from the database (**dummy data**) and set into an array - _movieComments_, using the **useEffect** hook. To display these comments, the **.map()** function was used on the **movieComments** array. Upon adding a new comment, a function - _**handleSaveComment**_ is invoked and it copies the content of _moviesComment_ array into a new array called _commentsArray_, adds the new comment to the _commentsArray_ using the **.push()** method and then sets the _commentsArray_ to the _movieComments_. The _movieComments_ state is declared using **"let"** to make reassigning values possible. A state manager like _REDUX_ was not used to handle the comments functionality because the comments on each video will differ. The comments were also not persisted, based on the coding challenge instruction. So, if a comment is added, and the user refreshes the page, the new comments disappers.
- ### Comments toggle on/off
  This functionality was handled by using the useState hook.
- ## Related Movies
  When a movie is being viewed, related or similar movies are displayed by comparing the **genre** of the active movie to the other movies in the database.
- ## Login and Security
  I assumed that the movie app is a service provided to private and only registered members. Therefore, the content or usage of the app is not available to users except they sign or log in first. The login and security method used is Google OAuth because of it's versatility and simplicity to implement. The login is persisted to keep user logged in throughout the use of the app, until the user logs out. This was implemented using the _**REDUX Persist**_ library.

## How to use the App

- Run _npm install_
- Then _yarn start_
- Make sure the development server is on http://localhost:3000
- Login in with this google account and explore the app:
  > Email: infinityuser2022@gmail.com
  > Password: BlindsideTestUser2022@

## Possible Future Improvements

- Add custom styling to the sign up and logout buttons
- Fetch data from an API
- Add light and dark modes
- Enable users to like and save videos in personally gallery

## Credit

> I want to thank the management of Blindside HB GmbH and Mr Benedikt Heinekamp for giving me the opportunity to work on this project.

## License

MIT
