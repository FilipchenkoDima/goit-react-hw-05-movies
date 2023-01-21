import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const BASE_KEY = '1f44a581d5740433e0c62a3a05886d44';

const options = {
  api_key: BASE_KEY,
};

export const getTrendingMovie = async () => {
  const response = await axios.get('/trending/movie/day', { params: options });
  return response.data.results;
};

export const getMovieById = async id => {
  const response = await axios.get(`/movie/${id}`, {
    params: options,
  });
  return response.data;
};

export const getCastById = async id => {
  const response = await axios.get(`/movie/${id}/credits`, {
    params: options,
  });
  return response.data.cast;
};

export const getReviewsById = async id => {
  const response = await axios.get(`/movie/${id}/reviews`, {
    params: options,
  });
  return response.data.results;
};

export const getSearchMovie = async name => {
  const newOptions = { ...options, query: name };
  const response = await axios.get(`/search/movie`, {
    params: newOptions,
  });
  return response.data.results;
};
