import { useState, useEffect } from "react";
import "./App.css";
import { useMovies } from "./hooks/useMovies";


function App() {
  const { movies, setSearch } = useMovies();


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new window.FormData(event.target);
    const query = data.get("query");
    setSearch(query);
  };

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
              <li className="grid-item" key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img src={movie.poster} alt="" />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default App;
