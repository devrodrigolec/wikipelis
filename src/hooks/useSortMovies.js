import { useState, useEffect } from "react";

export const useSortMovies = ({ search, movies }) => {
  const [isCheckedYear, setIsCheckedYear] = useState(false);
  const [isCheckedAZ, setIsCheckedAZ] = useState(false);
  const [sortedMovies, setSortedMovies] = useState([]);

  const handleCheckBoxYearChange = () => {
    if (isCheckedAZ) setIsCheckedAZ(false);
    setIsCheckedYear(!isCheckedYear);
    const newSortedMovies = [...movies].sort((a, b) => a.year - b.year);
    setSortedMovies(newSortedMovies);
  };

  const handleCheckBoxAZChange = () => {
    if (isCheckedYear) setIsCheckedYear(false);
    setIsCheckedAZ(!isCheckedAZ);
    const newIsChecked = !isCheckedAZ;

    if (newIsChecked) {
      const newSortedMovies = [...movies].sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
      });
      setSortedMovies(newSortedMovies);
      console.log(newSortedMovies);
    }
  };

  useEffect(() => {
    setIsCheckedAZ(false);
    setIsCheckedYear(false);
  }, [search]);

  return {
    isCheckedAZ,
    isCheckedYear,
    sortedMovies,
    handleCheckBoxAZChange,
    handleCheckBoxYearChange,
  };
};
