import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  height: 15vh;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const NavStyled = styled.nav`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogoStyled = styled.div`
  font-size: 2rem;
  margin-left: 2rem;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.primary};
`;

// Public Nav Styles
export const PublicNavLinksWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 2rem;
  margin-right: 2rem;
`;

export const PublicNavLinksStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 1.5rem;

  color: ${({ theme }) => theme.colors.light};
  transition: all 0.1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
