import styled from 'styled-components';

export const CardAverageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0 1rem;
`;

export const CardAverageDataWrapper = styled.div`
  display: flex;
  min-width: 100px;
  height: 50%;
  justify-content: space-around;
  align-items: center;
`;

export const CardAverageData = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DataWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  gap: 0.5rem;
`;

export const InfoWrapper = styled.div`
  width: 50%;
  height: 100%;

  font-size: 0.9rem;
  & > p {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

export const IconWrapper = styled.div``;

export const IconData = styled.img`
  min-width: 32px;
  max-width: 40px;
`;
