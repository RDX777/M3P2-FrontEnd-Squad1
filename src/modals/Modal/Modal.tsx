import ReactDOM from 'react-dom';
import { StyledModalBackdrop, StyledModalContent } from './ModalStyled';

interface IProps {
  children: React.ReactNode;
  backdropColor: string;
  zIndex?: any;
  open: boolean;
}

export const Modal = ({ children, backdropColor, zIndex = 1000, open = true }: IProps) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <StyledModalBackdrop $zIndex={zIndex} color={backdropColor} />
      <StyledModalContent $zIndex={zIndex}>{children}</StyledModalContent>
    </>,
    document.getElementById('portal'),
  );
};
