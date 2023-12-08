import { useState, useEffect } from "react";
import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { Movie } from "./components/Movie";

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
            placeholder="Batman, Iron man, Shrek..."
          />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <ul className="ul-grid">
          {movies?.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </ul>
      </main>
    </>
  );
}

export default App;
