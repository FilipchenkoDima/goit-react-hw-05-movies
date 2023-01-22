import { HeaderWrapper, NavigateLink } from './MovieHeader.styled';

export const MovieHeader = () => {
  return (
    <HeaderWrapper>
      <NavigateLink to="">Home</NavigateLink>
      <NavigateLink to="/movies">Movies</NavigateLink>
    </HeaderWrapper>
  );
};
