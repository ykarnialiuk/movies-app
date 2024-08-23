# Movie Search Application

## Description
The **Movie Search Application** provides users with a platform to manage their personal movie collection. Users can easily add, view, update, and delete movies, as well as track their watched status, personal notes, and ratings.

This project was bootstrapped with **Vite React App**.

## Functionality
- **Search Functionality:** Quickly find movies by title and release year.
- **Movie Collection Management:** 
  - Add found movies to your collection.
  - View a list of all movies in your collection with details such as title, genre, and watched status.
- **Movie Details:** 
  - Access detailed information about a particular movie, including its description, poster image, and user ratings.
- **Watched Status Tracking:** 
  - Mark movies as "watched" or "unwatched" to track your viewing status.
- **Personalization:**
  - Rate movies in your collection and update personal notes.
- **Removal of Movies:** 
  - Easily remove unwanted movies from your collection.

## Technical Requirements
- **API Integration:** Utilizes the [The Movie Database API](https://developer.themoviedb.org/reference/intro/getting-started) for accessing up-to-date film information.
- **Routing Management:** Implemented with **React Router** for seamless navigation between different routes and components.
- **State Management:** State is efficiently managed using **Redux**, facilitating effective handling of data and changes.
- **Asynchronous Operations:** Utilizes **Redux Toolkit Query (RTK Query)** for executing asynchronous API calls, simplifying data retrieval and handling.
- **User Interface Design:** A stylish and responsive UI is built with **React-Bootstrap**, enhancing the overall user experience.
- **Error Handling:** Comprehensive error handling for invalid searches and API failures, providing users with clear feedback on potential issues.
- **Favorite Movies Functionality:** Save and load your list of favorite movies using **Local Storage** for a more personalized experience.

## Available Scripts

In the project directory, you can run:

npm run dev
