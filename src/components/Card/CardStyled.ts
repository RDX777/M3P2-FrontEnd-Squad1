import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #202024;
  padding-top: 32px;
  border-radius: 5px;
  width: 40%;
  min-width: 500px;
  min-height: 325px;
  cursor: pointer;
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes.mediumLarge};
  font-weight: 600;
  margin: 0 0 8px 27px;
`;

export const CardTitleInfo = styled.span`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.mediumSmall};
  font-weight: 500;
`;

export const ChildrenWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
