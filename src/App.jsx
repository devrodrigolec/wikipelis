import "./App.css";
import { useMovies } from "./hooks/useMovies";
import { Movie } from "./components/Movie";
import { useSortMovies } from "./hooks/useSortMovies";



function App() {
  const { movies, search, loading, error, setSearch } = useMovies();
  const {
    isCheckedAZ,
    isCheckedYear,
    sortedMovies,
    handleCheckBoxAZChange,
    handleCheckBoxYearChange,
  } = useSortMovies({search, movies});

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
          <div className="sort-area">
            <label>Ordenar por año</label>
            <input
              className="checkbox"
              type="checkbox"
              checked={isCheckedYear}
              onChange={handleCheckBoxYearChange}
            />
            <label>Ordenar AZ</label>
            <input
              className="checkbox"
              type="checkbox"
              checked={isCheckedAZ}
              onChange={handleCheckBoxAZChange}
            />
          </div>
        </form>
        {error && <p className="error">{error}</p>}
      </header>
      <main>
        {loading ? (
          <p className="loading">Cargando...</p>
        ) : (
          <ul className="ul-grid">
            <Movie
              movies={isCheckedYear || isCheckedAZ ? sortedMovies : movies}
            />
          </ul>
        )}
      </main>
    </>
  );
}

export default App;
