import styled, { keyframes } from 'styled-components';

export const LoadingMain = styled.main`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

export const SpinnerItem = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${({ theme }) => theme.colors.primary} transparent transparent transparent;
`;
