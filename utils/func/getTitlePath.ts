export const getTitlePath = (title: string) => {
  switch (title) {
    case "Ingredient":
      return "ingredient";
    case "Cooking Method":
      return "cookingMethod";
    default:
      return title.toLowerCase();
  }
};
