"use client"
import Dropdown from './Dropdown';

const MenuList = () => {
  const ingredientsItems = ['Fried', 'Grilling', 'Boiling', 'Stir-fry', 'Seasoned', 'Etc'];
  const cookingMethodItems = ['Processed foods', 'Rice', 'Flour', 'Vegetables', 'Pork', 'Chicken meat', 'Beef', 'Etc'];

  return (
    <div className="hidden md:flex space-x-4">
      <Dropdown title="Ingredients" items={ingredientsItems} />
      <Dropdown title="Cooking Method" items={cookingMethodItems} />
    </div>
  );
};

export default MenuList;
