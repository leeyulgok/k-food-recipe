import { useContext } from 'react';
import DataContext from '../contexts/DataContext';

const useTopRecipes = () => {
  const { data } = useContext(DataContext);

  const sortedData = [...data].sort((a, b) => b.INQ_CNT - a.INQ_CNT);

  return sortedData.slice(0, 4);
};

export default useTopRecipes;
