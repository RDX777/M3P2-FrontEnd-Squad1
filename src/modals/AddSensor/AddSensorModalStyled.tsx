import styled from 'styled-components';
import { StyledInputIcon } from '../../components/InputIcon';

export const Container = styled.div`
  width: 100%;
  max-width: 563px;
  margin: 0 auto;
  padding: 40px 32px;
  border: none;
  border-radius: 8px;
  background-color: #202024;
`;

export const SpanError = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 14px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.larger};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.light};
`;

export const Info = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const AddSensorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.light};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
`;

export const ButtonsContainer = styled.div`
  display: flex;

  gap: 8px;
`;

export const CancelButton = styled.button`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 50px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  transition: color 0.2s ease 0s, border 0.2s ease 0s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.light};
  }
`;

// export const Select = styled.select`
//   width: 100%;
//   height: 50px;
//   background-color: ${({ theme }) => theme.colors.dark};
//   color: ${({ theme }) => theme.colors.light};
//   border: 1px solid ${({ theme }) => theme.colors.border};
//   border-radius: 5px;
//   outline: none;
//   padding: 0px 0rem 0px 3rem;

//   transition: all 0.2s ease-in-out;

//   &:focus {
//     border: 1px solid ${({ theme }) => theme.colors.primary};
//   }

//   &:focus + ${StyledInputIcon} path {
//     fill: ${({ theme }) => theme.colors.primary};
//   }
// `;
