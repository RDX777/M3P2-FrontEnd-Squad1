import styled from 'styled-components';
import { StyledInputIcon } from '../InputIcon';
export const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  outline: none;
  padding: 0px 1rem 0px 3rem;

  transition: all 0.2s ease-in-out;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &:focus + ${StyledInputIcon} path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;
