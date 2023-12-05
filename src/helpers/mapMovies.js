export const mapMovies = (movies) => {
  const moviesToMap = movies;

  return moviesToMap?.map((movie) => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    };
  });
};
