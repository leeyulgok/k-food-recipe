"use client"
import Dropdown from './Dropdown';
import INGREDIENT from '@/utils/constants/IngredientList';
import COOKING_METHOD from '@/utils/constants/CookingMethodList';

const MenuList = () => {
  return (
    <div className="hidden md:flex space-x-4">
      <Dropdown title={INGREDIENT.TITLE} items={INGREDIENT.LIST} />
      <Dropdown title={COOKING_METHOD.TITLE} items={COOKING_METHOD.LIST} />
    </div>
  );
};

export default MenuList;
