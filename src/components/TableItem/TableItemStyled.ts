import styled from 'styled-components';
import Switch, { SwitchProps } from '@mui/material/Switch';

export const TableData = styled.td`
  padding-bottom: 15px;
  padding-top: 15px;
  text-align: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
`;

export const TableRow = styled.tr``;

export const CustomCheckbox = styled.input`
  width: 15px;
  height: 15px;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.colors.primary};
`;

export const CustomSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      color: '#00A335',
      '& + .MuiSwitch-track': {
        backgroundColor: '#33a157',
      },
    },
  },
}));

export const CustomButton = styled.button`
  background-color: transparent;
  border: none;
`;
