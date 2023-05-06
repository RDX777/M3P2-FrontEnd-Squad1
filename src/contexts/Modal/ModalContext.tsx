import { createContext } from 'react';

interface ModalContextType {
  open: (item) => any;
  close: () => void;
  isOpen: boolean;
  data: any;
}

export const ModalContext = createContext<ModalContextType>({} as ModalContextType);
