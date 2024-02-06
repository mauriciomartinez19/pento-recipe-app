import { Meal } from "../types/meals";

interface getMealsApiProps {
  name?: string;
}

const getMeals = async ({ name }: getMealsApiProps) => {
  const url =
    process.env.REACT_APP_BASE_MEALS_API_URI +`search.php?s=${name}`;

  try {
    const response = await fetch(url);
    const data: Meal[] = await response.json();
    console.log(data);
    return { data };
  } catch (error) {
    console.error(error);
    return { errorMessage: "Error fetching meals. Please try again later." };
  }
};

export const Meals = {
  getMeals,
};
