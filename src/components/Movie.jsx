export const Movie = ({ movie }) => {
  return (
    <li className="grid-item">
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <img src={movie.poster} alt={movie.title} />
    </li>
  );
};
