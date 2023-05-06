/* eslint-disable react/prop-types */
import {
  StyledContainer,
  CardTitle,
  CardTitleInfo,
  CardTitleWrapper,
  ChildrenWrapper,
} from './CardStyled';

export interface IProps {
  title: string;
  info?: string;
  children: React.ReactNode;
}

export const Card = ({ title, info, children }: IProps) => {
  return (
    <StyledContainer>
      <CardTitleWrapper>
        <CardTitle>{title}</CardTitle>
        <CardTitleInfo>{info}</CardTitleInfo>
      </CardTitleWrapper>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </StyledContainer>
  );
};
