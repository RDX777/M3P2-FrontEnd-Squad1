import styled from 'styled-components';
export const StyledMyButton = styled.button`
  margin-top: 1rem;
  width: 100%;
  height: 50px;
  cursor: pointer;
  background: linear-gradient(45deg, #00a335, #48b554);
  border-radius: 5px;
  font-weight: bold;
  border: none;
  color: ${({ theme }) => theme.colors.light};
  text-transform: uppercase;
  transition: background 0.2s ease 0s, color 0.2s ease 0s;

  &:hover {
    background: linear-gradient(45deg, #00a335, #27bdbe);
    color: ${({ theme }) => theme.colors.dark};
  }
`;
