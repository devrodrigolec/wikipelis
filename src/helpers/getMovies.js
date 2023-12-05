const API_KEY = "37dfd9b4";

export const getMovies = (search, setMovies) => {
  return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    .then((resp) => resp.json())
    .then((data) => setMovies(data.Search));
};