import React, { useCallback, useState } from 'react';
import { ModalContext } from './ModalContext';

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState(undefined);

  const open = useCallback((modalData) => {
    setData(modalData);
  }, []);

  const close = useCallback(() => {
    setData(undefined);
  }, []);

  const isOpen = !!data;

  return (
    <ModalContext.Provider value={{ isOpen, close, open, data }}>{children}</ModalContext.Provider>
  );
};
