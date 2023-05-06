import { createContext } from 'react';

interface LocalsContextType {
  locals: Array<any>;
  setLocals: any;
  searchResult: Array<any>;
  setSearchResult: any;
  dataChanged: boolean;
  setDataChanged: any;
  searchText: string;
  setSearchText: any;
  isSelected: any;
  setIsSelected: any;
}

export const LocalsContext = createContext<LocalsContextType>({} as LocalsContextType);
