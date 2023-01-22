import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackBtn = styled(Link)`
  text-decoration: none;
  display: inline-block;
  padding: 7px 24px;
  border: 1px solid #000000;
  border-radius: 6px;
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  margin: 6px;
  background-color: #ffffff;
  :hover,
  :active {
    color: #ff7f50;
    background-color: #1111;
  }
`;

export const MovieDetailsPosition = styled.div`
  padding: 4px 24px;
`;

export const AdditionalInfoList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 18px;
`;

export const AdditionalInfoTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0;
`;

export const AdditionalInfoItem = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  font-weight: 400;
  &.active {
    color: #ff7f50;
  }
  :hover {
    color: #ff7f50;
  }
`;