import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  height: 85vh;

  h2 {
    margin: 3.125rem 0 0 2rem;
    font-size: 1.25rem;
  }

  overflow-y: auto;
`;

export const OverViewContainer = styled.div`
  margin-top: 1.25rem;

  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const NotFoundWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin-top: 1.25rem;
    font-size: 1.25rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.success};
    }
  }
`;

export const NotFoundImgWrapper = styled.div`
  img {
    width: 20rem;
  }
`;
