import styled from 'styled-components';
import { InputIcon } from '../InputIcon/InputIcon';

export const CustomTable = styled.table`
  flex-grow: 5;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  width: 100%;

  border-collapse: collapse;
`;

export const TableHeadData = styled.th`
  padding-bottom: 15px;
  font-weight: bold;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
`;

export const TableRow = styled.tr``;

export const WarningWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  /* padding-bottom: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary}; */
`;

export const CustomIcon = styled(InputIcon)`
  position: unset;
`;

export const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.secondary};
`;
