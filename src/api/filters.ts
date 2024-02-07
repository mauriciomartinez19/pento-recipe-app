import { Areas, Categories } from "../types/filters";

const getCategories = async () => {
  const url = process.env.REACT_APP_BASE_MEALS_API_URI + "list.php?c=list";
  const response = await fetch(url);
  const { meals }: Categories = await response.json();
  return meals.map((meal) => meal.strCategory);
};

const getAreas = async () => {
  const url = process.env.REACT_APP_BASE_MEALS_API_URI + "list.php?a=list";
  const response = await fetch(url);
  const { meals }: Areas = await response.json();
  return meals.map((meal) => meal.strArea);
};

const getFilters = async () => {
  try {
    const [categories, areas] = await Promise.all([
      getCategories(),
      getAreas(),
    ]);
    return { categories, areas };
  } catch (e) {
    return { errorMessage: "Failed to load filters." };
  }
};

export const Filters = {
  getFilters,
};
