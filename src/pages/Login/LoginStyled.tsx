import styled from 'styled-components';

export const LoginMain = styled.main`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

export const LoginSideBar = styled.aside`
  width: 100%;
  max-width: 30rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: initial;
  gap: 4rem;

  h2 {
    font-size: 4rem;
  }
`;

export const LogoWrapper = styled.div`
  img {
    width: 30%;
    max-width: 10rem;
    min-width: 7rem;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 30rem;
  padding: 64px;
  background-color: #202024;
  border-radius: 8px;
`;

export const LoginSection = styled.section`
  display: grid;
  grid-auto-flow: row;
  gap: 10px;

  & > div > span {
    display: inline-block;
    color: ${({ theme }) => theme.colors.danger};
    font-size: 14px;
    padding-top: 7px;
  }
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

export const ForgotLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin: 8px 0px 24px;
  opacity: 0.8;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const FormRegisterWrapper = styled.div`
  font-size: 14px;
  color: rgb(205, 205, 205);
  margin-top: 1.6rem;
  text-align: center;

  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
    font-weight: 600;
    margin: 8px 0px 24px;
    opacity: 0.8;
    transition: opacity 0.2s ease 0s;
  }

  & > a:hover {
    opacity: 1;
  }
`;
