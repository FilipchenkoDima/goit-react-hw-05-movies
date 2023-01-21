import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'services/movie-api';

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    getReviewsById(movieId).then(setMovieReviews);
  }, [movieId]);

  if (!movieReviews) {
    return;
  }

  if (movieReviews.length === 0) {
    return <p>We don't have any review for this movie</p>;
  }

  return (
    <>
      <ul>
        {movieReviews.map(review => {
          return (
            <li key={review.id}>
              <p>{`Author: ${review.author}`}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
