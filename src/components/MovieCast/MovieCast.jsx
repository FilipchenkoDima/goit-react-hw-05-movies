import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'services/movie-api';
import { CastImg, CastItem, CastWrapper } from './MovieCast.styled';

export const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    getCastById(movieId).then(setMovieCast);
  }, [movieId]);

  return (
    <>
      {movieCast && (
        <CastWrapper>
          {movieCast.map(
            ({ credit_id, original_name, profile_path, character }) => {
              return (
                <CastItem key={credit_id}>
                  <CastImg
                    src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                    alt={original_name}
                  />
                  <div>
                    <p>{original_name}</p>
                    <p>{`Character: ${character}`} </p>
                  </div>
                </CastItem>
              );
            }
          )}
        </CastWrapper>
      )}
    </>
  );
};
