"use client"

import Dropdown from './Dropdown';
import INGREDIENT from '@/utils/constants/ingredientList';
import COOKING_METHOD from '@/utils/constants/cookingMethodList';
import styles from './MenuList.module.css'

const MenuList = () => {
  return (
    <div className={styles.menuListSection}>
      <Dropdown title={INGREDIENT.TITLE} items={INGREDIENT.LIST} />
      <Dropdown title={COOKING_METHOD.TITLE} items={COOKING_METHOD.LIST} />
    </div>
  );
};

export default MenuList;
