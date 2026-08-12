# DoubleFeature

This is a basic movie-finding app using TMDB's API. It connects to TMDB endpoints that grab 20 current trending films, but also allows the user to search for any film. Clicking a film will take you to a page with that movie's details and trailer; all movies can be added to a Watchlist or your Favourites, and all movies have a "Watch With..." button - the gimmick of this app. Clicking it hits TMDB's "similar movies" endpoint to grab a highly-rated film within the same genre(s) of your selected movie, thereby pairing it with a recommendation for a movie night!

# Technical Info

This project has been forked from the [Learn React In One Project](https://github.com/techwithtim/Learn-React-In-One-Project) tutorial. 
That template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

The  following features have been added:

- Pagination to the main/Trending page and the ability to click forward and back
- Debounce on search input - we only fetch results once a user has paused typing
- Logo designed by myself
- Hero banner designed by myself, inspired by TMDB using Getty stock image
- Updated nav bar and general UI tweaks
- "Similar movie" generator functionality
