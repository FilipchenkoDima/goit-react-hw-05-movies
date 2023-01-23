import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getMovieById } from 'services/movie-api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import {
  GoBackBtn,
  MovieDetailsPosition,
  AdditionalInfoList,
  AdditionalInfoTitle,
  AdditionalInfoItem,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId).then(setMovieDetails);
  }, [movieId]);

  const currentLocation = useRef(location.state?.from ?? '/');

  return (
    <>
      {movieDetails && (
        <>
          <GoBackBtn to={currentLocation.current}>Go back</GoBackBtn>
          <MovieDetailsPosition>
            <MovieInfo movieDetails={movieDetails} />
            <div>
              <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
              <AdditionalInfoList>
                <li>
                  <AdditionalInfoItem to={`/movies/${movieId}/cast`}>
                    Cast
                  </AdditionalInfoItem>
                </li>
                <li>
                  <AdditionalInfoItem to={`/movies/${movieId}/reviews`}>
                    Reviews
                  </AdditionalInfoItem>
                </li>
              </AdditionalInfoList>
            </div>
            <Outlet />
          </MovieDetailsPosition>
        </>
      )}
    </>
  );
};

export default MovieDetails;
