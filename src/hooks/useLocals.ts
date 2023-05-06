import { LocalsContext } from '../contexts/Locals/LocalsContext';
import { useContext } from 'react';
export const useLocals = () => {
  const context = useContext(LocalsContext);
  if (!context) {
    throw new Error('useLocals deve ser usado dentro de um LocalsProvider');
  }

  return context;
};
