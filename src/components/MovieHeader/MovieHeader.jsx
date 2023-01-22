import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderWrapper, NavigateLink } from './MovieHeader.styled';

export const MovieHeader = () => {
  return (
    <>
      <HeaderWrapper>
        <NavigateLink to="">Home</NavigateLink>
        <NavigateLink to="/movies">Movies</NavigateLink>
      </HeaderWrapper>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
