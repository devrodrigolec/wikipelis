import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { Movie } from "./components/Movie";

function App() {
  const { movies, loading, error, setSearch } = useMovies();

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
            className={`buscador ${error ? "buscador-rojo" : ""}`}
            type="text"
            placeholder="Batman, Iron man, Shrek..."
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p className="error">{error}</p>}
      </header>
      <main>
        {loading ? (
          <p className="loading">Cargando...</p>
        ) : (
          <ul className="ul-grid">
            <Movie movies={movies} />
          </ul>
        )}
      </main>
    </>
  );
}

export default App;
