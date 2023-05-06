import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  color: ${({ theme }) => theme.colors.light};
  min-width: 390px;
  height: 85vh;
  background-color: #202024;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin: 3.125rem 0 0 2rem;
    font-size: 1.25rem;
  }
`;
export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 3.125rem 0 0 2rem;
    font-size: 1.25rem;
  }
`;

export const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 3rem;
  gap: 1.5rem;
`;

export const SidebarListItem = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.light};
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  ${(props) =>
    props.isSelected &&
    css`
      border-color: ${({ theme }) => theme.colors.primary};
    `};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LogoutWrapper = styled.div`
  margin: 0 0 6.25rem 2rem;
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
