import styled from 'styled-components';

export const InputWrapper = styled.form`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.grey};
  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;
