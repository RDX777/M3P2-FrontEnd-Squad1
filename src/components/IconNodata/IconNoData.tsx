import React, { FC } from 'react';
import { StyledInputIcon } from './IconNoDataStyled';

type IconProps = {
  path: string;
} & React.SVGProps<SVGSVGElement>;

export const IconNoData: FC<IconProps> = ({ path }) => (
  <StyledInputIcon className={path} viewBox="0 0 256 256">
    <path d={path} />
  </StyledInputIcon>
);
