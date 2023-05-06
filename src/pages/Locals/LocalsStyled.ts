import styled, { css } from 'styled-components';

export const Main = styled.main`
  padding: 40px 60px 40px 100px;
  height: 85vh;
  width: 81vw;
`;

export const Section = styled.section`
  max-width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SectionHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

interface Iprops {
  isEmptyArray: boolean;
}

export const SectionBody = styled.div<Iprops>`
  width: 100%;
  padding: 40px 0 0 32px;
  ${(props) =>
    props.isEmptyArray &&
    css`
      padding-top: 200px;
    `};
`;

export const DivFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const DivFlexStart = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.light};
`;
