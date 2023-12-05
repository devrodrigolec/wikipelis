import { useState, useEffect } from "react";
import { getMovies } from "../helpers/getMovies";
import { mapMovies } from "../helpers/mapMovies";



export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    getMovies(search, setMovies);
  }, [search]);

  const mappedMovies = mapMovies(movies);

  return { movies: mappedMovies, setSearch };
};
