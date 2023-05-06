import React, { useState } from 'react';
import { DevicesContext } from './DevicesContext';

export const DevicesProvider = ({ children }: { children: React.ReactNode }) => {
  const [devices, setDevices] = useState([]);
  const [searchResultDevices, setSearchResultDevices] = useState([]);
  const [dataChangedDevices, setDataChangedDevices] = useState(false);
  const [searchText, setSearchtext] = useState('');
  const [devicesToDelete, setDevicesToDelete] = useState([]);

  return (
    <DevicesContext.Provider
      value={{
        devices,
        setDevices,
        searchResultDevices,
        setSearchResultDevices,
        dataChangedDevices,
        setDataChangedDevices,
        searchText,
        setSearchtext,
        devicesToDelete,
        setDevicesToDelete,
      }}
    >
      {children}
    </DevicesContext.Provider>
  );
};
