import { createContext } from 'react';

interface DevicesContextType {
  devices: Array<any>;
  setDevices: any;
  searchResultDevices: Array<any>;
  setSearchResultDevices: any;
  dataChangedDevices: boolean;
  setDataChangedDevices: any;
  searchText: string;
  setSearchText: any;
  devicesToDelete: Array<any>;
  setDevicesToDelete: any;
}

export const DevicesContext = createContext<DevicesContextType>({} as DevicesContextType);
