import { useState, useEffect, useRef } from "react";
import { getMovies } from "../helpers/getMovies";
import { mapMovies } from "../helpers/mapMovies";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef("");

  const fetchData = async () => {
    try {
      setError(null);
      console.log("buscando");
      setLoading(true);

      await getMovies(search, setMovies);
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
      previousSearch.current = search;
    }
  };

  useEffect(() => {
    if (previousSearch.current === search) return;
    if (search.length < 3) {
      setError("La búsqueda debe tener 3 carácteres como mínimo.");
      return;
    }
    if (search === "") {
      setError("No existe criterio de búsqueda.");
      return;
    }

    fetchData();
  }, [search]);

  const mappedMovies = mapMovies(movies);

  return { movies: mappedMovies, loading, error, setSearch };
};
