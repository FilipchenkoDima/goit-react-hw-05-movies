import { getTrendingMovie } from 'services/movie-api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HomeWrapper, HomeTitle, MovieList, ListItem } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovie().then(setMovies);
  }, []);

  return (
    <HomeWrapper>
      <HomeTitle>Trending today</HomeTitle>
      <MovieList>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <ListItem state={{ from: location }} to={`/movies/${id}`}>
                {title}
              </ListItem>
            </li>
          );
        })}
      </MovieList>
    </HomeWrapper>
  );
};

export default Home;
