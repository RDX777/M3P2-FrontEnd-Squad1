import React, { useState } from 'react';
import { LocalsContext } from './LocalsContext';
import { PlaceMenu } from '../../interfaces/local.interface';

export const LocalsProvider = ({ children }: { children: React.ReactNode }) => {
  const place = JSON.parse(localStorage.getItem('place'));
  const [locals, setLocals] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [dataChanged, setDataChanged] = useState(false);
  const [searchText, setSearchtext] = useState('');
  const [isSelected, setIsSelected] = useState<PlaceMenu | null>(place);

  return (
    <LocalsContext.Provider
      value={{
        locals,
        setLocals,
        searchResult,
        setSearchResult,
        dataChanged,
        setDataChanged,
        searchText,
        setSearchtext,
        isSelected,
        setIsSelected,
      }}
    >
      {children}
    </LocalsContext.Provider>
  );
};
