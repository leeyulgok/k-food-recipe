import { createContext } from 'react';
import { DataType } from '@/utils/types/DataType';

interface DataContextType {
  data: DataType[];
  updateData: (newData: DataType[]) => void;
}

const defaultContextValue: DataContextType = {
  data: [],
  updateData: () => {},
};

const DataContext = createContext<DataContextType>(defaultContextValue);

export default DataContext;
