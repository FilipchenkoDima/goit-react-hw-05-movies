import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MovieCast } from './MovieCast/MovieCast';
import { MovieHeader } from './MovieHeader/MovieHeader';
import { MovieReviews } from './MovieReviews/MovieReviews';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieHeader />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
