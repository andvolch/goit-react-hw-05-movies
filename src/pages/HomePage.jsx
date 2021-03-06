import { useState, useEffect } from 'react';

import { getTrending } from '../services/TMDB';
import HomePageTitle from '../components/HomePageTitle/HomePageTitle';
import List from '../components/List/List';

export default function HomePage() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending(page)
      .then(results => setMovies([...movies, ...results]))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <HomePageTitle text="Trending today" />
      {movies.length > 0 && <List list={movies} />}
    </>
  );
}
