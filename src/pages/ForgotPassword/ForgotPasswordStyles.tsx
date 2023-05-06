import styled from 'styled-components';

export const ForgotPasswordMain = styled.main`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ForgotContainer = styled.form`
  width: 20%;
  max-width: 20rem;
  min-width: 18rem;
  text-align: center;
`;

export const ForgotSection = styled.section`
  display: grid;
  grid-auto-flow: row;
  gap: 0.5rem;
  margin-top: 2rem;

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
