export const Movie = ({ movies }) => {
  return (
   <>
   {movies.map((movie) => (
       <li className="grid-item" key={movie.id}>
       <h3>{movie.title}</h3>
       <p>{movie.year}</p>
       <img src={movie.poster} alt={movie.title} />
     </li>
   ))}
   </>
  );
};
