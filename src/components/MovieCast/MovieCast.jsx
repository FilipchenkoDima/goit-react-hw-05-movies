import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'services/movie-api';

export const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    getCastById(movieId).then(setMovieCast);
  }, [movieId]);

  return (
    <>
      {movieCast && (
        <ul>
          {movieCast.map(
              ({ credit_id, original_name, profile_path, character }) => {
                  return (
                    <li key={credit_id}>
                      <img
                        src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                        alt={original_name}
                      />
                      <p>{original_name}</p>
                      <p>{`Character: ${character}`} </p>
                    </li>
                  );
            }
          )}
        </ul>
      )}
    </>
  );
};
