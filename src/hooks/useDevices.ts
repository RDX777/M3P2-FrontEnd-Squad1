import { DevicesContext } from '../contexts/Devices/DevicesContext';
import { useContext } from 'react';
export const useDevices = () => {
  const context = useContext(DevicesContext);
  if (!context) {
    throw new Error('useDevices deve ser usado dentro de um DevicesProvider');
  }

  return context;
};
