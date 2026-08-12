const API_KEY = "";
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch trending films
export const getTrendingMovies = async (page = 1) => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
    if (! response.ok) throw new Error('Failed to get trending movies');
    
    return response.json();
}

// Search all of TMDB for specific film
export const searchMovies = async (query, page = 1) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`);
    if (! response.ok) throw new Error('Failed to search movies');
    
    return response.json();
};

// Fetch film info (release date, genres, etc)
export const getMovieDetails = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    if (! response.ok) throw new Error('Failed to fetch movie details');
    
    return response.json();
};

// Fetch film trailer
export const getMovieVideos = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);
    if (! response.ok) throw new Error('Failed to fetch movie videos');
    
    return response.json();
};
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
