import { useState, useEffect, useRef, useCallback } from "react";
import { getMovies } from "../helpers/getMovies";
import { mapMovies } from "../helpers/mapMovies";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef("");
  const firstSearch = useRef(true);

  const fetchData = async () => {
    try {
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
    
    if (search === "" && !firstSearch.current) {
      setError("No existe criterio de búsqueda.");
      setMovies([]);
      console.log("hola");
      return;
    }
    if (search.length > 0 && search.length < 3) {
      setError("La búsqueda debe tener 3 carácteres como mínimo.");
      setMovies([]);
      return;
    }
    if (previousSearch.current === search) return;

    setError(null);
    firstSearch.current = false;
    fetchData();
  }, [search]);

  const mappedMovies = mapMovies(movies);

  return { movies: mappedMovies, loading, error, setSearch };
};
