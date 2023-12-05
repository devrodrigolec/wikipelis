import { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new window.FormData(event.target);
    const query = data.get('query')
    setSearch(query);
  };



  const getMovies = (search) => {
    return fetch(`http://www.omdbapi.com/?apikey=37dfd9b4&s=${search}`)
      .then((resp) => resp.json())
      .then((data) => setMovies(data.Search));
  };

  useEffect(() => {
    getMovies(search);
  }, [search]);

  return (
    <>
      <header>
        <h1>WikiPelis</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            name="query"
            className="buscador"
            type="text"
            placeholder="Batman, Spiderman, Shrek..."
          />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <ul className="ul-grid">
          {movies?.map((movie) => {
            return (
              <li className="grid-item" key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt="" />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default App;
