import styled from 'styled-components';

export const Main = styled('div')``;

export const DropDownContainer = styled('div')`
  width: 100%;
  margin: 0 auto;
`;

export const DropDownHeader = styled('div')`
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  cursor: pointer;
  padding-left: 50px;
  padding-top: 0px;
  font-weight: 300;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.mediumSmall};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DropDownListContainer = styled('div')`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.dark};
  top: 97%;
  z-index: 100;
  width: 100%;
`;

export const DropDownList = styled('ul')`
  padding: 0;
  margin: 0;
  /* padding-left: 1em; */
  background-color: 9999;
  border-top: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0 0 5px 5px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.light};
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

export const ListItem = styled('li')`
  cursor: pointer;
  list-style: none;
  margin-bottom: 5px;
  padding-bottom: 5px;
  padding-top: 5px;
  padding-left: 1em;
  font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

export const SpanSelected = styled.span`
  color: ${({ theme }) => theme.colors.light};
`;
