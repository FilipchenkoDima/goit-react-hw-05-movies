import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormWrapper = styled.form`
  padding: 24px;
  display: flex;
  gap: 4px;
`;

export const MovieFinderInput = styled.input`
  width: 200px;
  height: 22px;
  border-radius: 4px;
  font-size: 16px;
`;

export const MovieSearchBtn = styled.button`
  height: 28px;
  width: 28px;
  border-radius: 5px;
  background-color: #ffffff;
  cursor: pointer;
  :hover,
  :active {
    background-color: #1111;
  }
`;

export const MovieList = styled.ul`
  padding: 0px;
  padding-left: 24px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  list-style: none;
`;

export const MovieItem = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-size: 19px;
  font-weight: 500;
  :hover,
  :active {
    color: #ff7f50;
  }
`;
