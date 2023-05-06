import styled from 'styled-components';

export const RegisterMain = styled.main`
  width: 100%;
  overflow-y: scroll;
  /* height: 85vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0 30px 100px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-self: self-start;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.light};
`;

export const RegisterWrapper = styled.div`
  width: 100%;
  max-height: 700px;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterSideBar = styled.aside`
  width: 100%;
  max-width: 30rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: initial;
  gap: 4rem;

  h2 {
    font-size: 3rem;
  }
`;

export const LogoWrapper = styled.div`
  img {
    width: 30%;
    max-width: 10rem;
    min-width: 7rem;
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  width: 100%;
  min-height: 480px;

  max-width: 40rem;
  padding: 32px 60px;
  background-color: #202024;
  border-radius: 8px;
`;

export const RegisterSection = styled.section`
  display: grid;
  grid-auto-flow: row;
  gap: 0.5rem;
  height: 450px;
  overflow-y: scroll;

  & > div > span {
    display: inline-block;
    color: ${({ theme }) => theme.colors.danger};
    font-size: 14px;
    padding-top: 7px;
  }
`;

export const SpanError = styled.span`
  /* display: inline-block; */
  color: ${({ theme }) => theme.colors.danger};
  font-size: 14px;
  /* padding-top: 4px; */
`;

export const InputWrapper = styled.div`
  position: relative;
  flex: 1 1 0%;

  & > svg {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
  }

  & > svg:focus {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export const DoubleInputWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 30px;
`;

export const DoubleErrorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & > span {
    width: 40%;
    display: inline-block;
    color: ${({ theme }) => theme.colors.danger};
    font-size: 14px;
    padding-top: 7px;
  }
`;

export const StyledButtonForm = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 1rem;
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

export const Label = styled.label``;
