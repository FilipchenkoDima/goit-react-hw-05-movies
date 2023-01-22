import { useState, useEffect } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/movie-api';
import { FormWrapper, MovieFinderInput } from './Movies.styled';

export const Movies = () => {
  const [movieName, setMovieName] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('query') ?? '';
  const location = useLocation() 

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
        <button type="submit">Search</button>
      </FormWrapper>
      <ul>
        {movieList.map(({ id, title }) => {
          return (
            <li key={id}>
              <NavLink state={{ from: location }} to={`/movies/${id}`}>
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};
