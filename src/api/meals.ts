import { MappedMeal, Meal } from "../types/meals";

interface getMealsApiProps {
  name?: string;
}

const proxy = (meal: Meal): MappedMeal => {
  return {
    id: meal.idMeal,
    name: meal.strMeal,
    category: meal.strCategory,
    area: meal.strArea,
    image: meal.strMealThumb,
  };
};

const getMeals = async ({ name }: getMealsApiProps) => {
  const url = process.env.REACT_APP_BASE_MEALS_API_URI + `search.php?s=${name}`;

  try {
    const response = await fetch(url);
    const { meals } = await response.json();
    return { data: (meals as Meal[]).map((meal) => proxy(meal)) };
  } catch (error) {
    console.error(error);
    return { errorMessage: "Error fetching meals. Please try again later." };
  }
};

export const Meals = {
  getMeals,
};
