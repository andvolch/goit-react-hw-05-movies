import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from '../Container/Container';
import AppBar from '../AppBar/AppBar';
// import HomePage from '../../pages/HomePage';
// import MoviesPage from '../../pages/MoviesPage';
// import MovieDetailsPage from '../../pages/MovieDetailsPage';
// import NotFoundView from '../../pages/NotFoundView';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import Loader from '../Loader/Loader';

const HomePage = lazy(() =>
  import('../../pages/HomePage.jsx' /* webpackChunkName: "home-view" */),
);
const MoviesPage = lazy(() =>
  import('../../pages/MoviesPage.jsx' /* webpackChunkName: "movies-view" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../../pages/MovieDetailsPage.jsx' /* webpackChunkName: "details-view" */
  ),
);
const NotFoundView = lazy(() =>
  import(
    '../../pages/NotFoundView.jsx' /* webpackChunkName: "notFound-view" */
  ),
);

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="movies" element={<MoviesPage />} />

          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={5000} />
    </Container>
  );
}
