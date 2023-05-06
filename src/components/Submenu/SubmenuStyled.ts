import styled from 'styled-components';

export const SubMenuWrapper = styled.div`
  height: 100%;
`;

export const TitleWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  user-select: none;
`;

export const Dropdown = styled.div`
  border-radius: 0 0 0 5px;
  background-color: ${({ theme }) => theme.colors.dark};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 16px;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  max-width: 192px;

  position: relative;
  z-index: 9999;
`;

export const DropdownItem = styled.span`
  :last-child {
    border: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;
