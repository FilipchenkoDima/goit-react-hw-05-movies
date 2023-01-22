import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/movie-api';
import {
  FormWrapper,
  MovieFinderInput,
  MovieItem,
  MovieSearchBtn,
  MovieList,
} from './Movies.styled';
import { MdSearch } from 'react-icons/md';

const Movies = () => {
  const [movieName, setMovieName] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!filter) {
      return;
    }

    getSearchMovie(filter).then(setMovieList);
  }, [filter]);

  const handlerSubmit = e => {
    e.preventDefault();

    setSearchParams({ query: movieName });
    setMovieName('');
  };

  const getMovieName = e => {
    const value = e.currentTarget.value;
    setMovieName(value);
  };

  return (
    <>
      <FormWrapper onSubmit={handlerSubmit}>
        <label>
          <MovieFinderInput
            type="text"
            onChange={getMovieName}
            value={movieName}
          />
        </label>
        <MovieSearchBtn type="submit">{<MdSearch />}</MovieSearchBtn>
      </FormWrapper>
      <MovieList>
        {movieList.map(({ id, title }) => {
          return (
            <li key={id}>
              <MovieItem state={{ from: location }} to={`/movies/${id}`}>
                {title}
              </MovieItem>
            </li>
          );
        })}
      </MovieList>
    </>
  );
};

export default Movies;
