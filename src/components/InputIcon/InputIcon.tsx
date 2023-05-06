import React, { FC } from 'react';
import { StyledInputIcon } from './StyledInputIcon';

type IconProps = {
  path: string;
} & React.SVGProps<SVGSVGElement>;

export const InputIcon: FC<IconProps> = ({ path }) => (
  <StyledInputIcon viewBox="0 0 256 256">
    <path d={path} />
  </StyledInputIcon>
);
