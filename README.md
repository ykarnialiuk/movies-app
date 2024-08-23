Movie Search Application

Description:
The purpose of this application is to provide users with a platform to manage their personal movie collection. Users can add, view, update and delete movies, as well as track their watched status, personal notes and ratings.

This project was bootstrapped with Vite React App.

Functionality:
Implementation of a search function to quickly find movies by title, release year.
Ability to add found movies to a collection.
Displaying a list of all movies in the collection with their details, including title, genre, and watched status.
View details about a particular movie in the collection, including its description, poster image, and user ratings.
Ability to mark a movie in the collection as "watched" or "unwatched" to track viewing status.
﻿﻿Ability to rate a movie in the collection and update personal notes.
﻿﻿Ability to remove unwanted movies from the collection.
  
Technical requirements:
API Integration: The project integrates with an API to retrieve movie data, specifically leveraging the The Movie Database API, allowing access to up-to-date information about films.
Routing Management: React Router is utilized to manage different routes and components within the application, facilitating smooth navigation through the interface.
State Management: The application's state is managed using Redux, enabling efficient handling of data and its changes.
Asynchronous Operations: For executing asynchronous operations such as API calls, Redux Toolkit Query (RTK Query) is employed, simplifying data handling and retrieval.
User Interface Design: The application features a stylish and responsive user interface built with React-Bootstrap, enhancing the overall user experience.
Error Handling: Comprehensive error handling is implemented for invalid searches and API failures, providing users with clear feedback on potential issues.
Favorite Movies Functionality: Users can save and load their list of favorite movies using Local Storage, allowing for a more personalized interaction with the application

Available Scripts:

In the project directory, you can run:
npm run dev

Runs the app in the development mode.

Open http://localhost:5173 to view it in the browser.
