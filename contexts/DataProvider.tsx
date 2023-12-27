import React, { useState, FC, ReactNode } from 'react';
import DataContext from './DataContext';
import { DataType } from '@/utils/types/DataType';

interface DataProviderProps {
  children: ReactNode;
}

const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<DataType[]>([]);

  const updateData = (newData: DataType[]) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
