import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding: 24px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
`;

export const NavigateLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  &.active {
    color: #ff7f50;
  }
  :hover {
    color: #ff7f50;
  }
`;
