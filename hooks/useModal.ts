import { useState } from 'react';
import { DataType } from "@/utils/types/DataType";

const useModal = () => {
  const [openedModalId, setOpenedModalId] = useState<number | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<DataType | null>(null);

  const openModal = (recipe: DataType) => {
    setSelectedRecipe(recipe);
    setOpenedModalId(recipe.RCP_SNO);
  };

  const closeModal = () => {
    setOpenedModalId(null);
  };

  return { openedModalId, selectedRecipe, openModal, closeModal };
};

export default useModal;