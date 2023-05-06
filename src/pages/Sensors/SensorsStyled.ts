import styled, { css } from 'styled-components';

export const SensorsText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  height: 70vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
  padding-bottom: 20px;
  text-align: center;
  margin-left: 200px;
  min-width: 700px;
  max-width: 950px;
  justify-content: space-between;
`;

export const ContainerSearchBar = styled.div`
  padding-top: 30px;
`;

export const ContainerSearchMyButton = styled.div``;

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

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.light};
`;

export const DivFlexStart = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 350px;
`;
