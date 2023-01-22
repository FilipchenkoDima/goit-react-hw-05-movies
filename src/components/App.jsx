import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Movies } from '../pages/Movies/Movies';
import { MovieCast } from './MovieCast/MovieCast';
import { MovieHeader } from './MovieHeader/MovieHeader';
import { MovieReviews } from './MovieReviews/MovieReviews';

export const App = () => {
  return (
    <div>
      <MovieHeader/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
