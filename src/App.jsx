import "./App.css";
import responseAPI from './mocks/with-results.json'

function App() {
  const movies = responseAPI.Search;
  return (
    <>
      <header>
        <h1>WikiPelis</h1>
        <form action="" className="form">
          <input className="buscador" type="text" placeholder="Batman, Spiderman, Shrek..." />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <ul className="ul-grid">
        {
          movies.map((movie) => {
            return(
              <li className="grid-item" key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt="" />
              </li>
             
            )
          })
        }

        </ul>
      </main>
    </>
  );
}

export default App;
