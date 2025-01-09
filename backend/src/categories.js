let categories = [{ id: 1, name: "salary" }];

export const getCategories = () => {
  return categories;
};

export const addCategory = (category) => {
  const newCategory = {
    id: categories.length + 1,
    name: category,
  };
  categories = [...categories, newCategory];
  console.log("categories: " , categories);
  return newCategory;
};

// For delete applicable category
// Strictly just update the data's name to null
export const deleteCategory = (id) => {
  const index = categories.findIndex((category) => category.id === id);
  if (index !== -1) {
    categories[index].name = "(DELETED)";
    return categories[index];
  }
  return null;
};
  
export const validateCategory = (categoryId) => {
  return categories.find((category) => category.id === categoryId);
};

export default { getCategories, addCategory, deleteCategory, validateCategory };
