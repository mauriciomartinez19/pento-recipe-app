import { useEffect, useState } from "react";
import { Meals } from "../api/meals";
import { MappedMeal } from "../types/meals";

export const useMeals = () => {
  const [name, setName] = useState<string>("");
  // const [filters, setFilters] = useState<{category: string, area: string}>();
  const [meals, setMeals] = useState<MappedMeal[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  useEffect(() => {
    const getMeals = async () => {
      setLoading(true)
      const response = await Meals.getMeals({ name });
      setMeals(response?.data);
      setError(response?.errorMessage);
      setLoading(false);
    };
    getMeals();
  }, [name]);

  const updateName = (name: string) => {
    setName(name);
  };
  return {
    meals,
    loading,
    error,
    updateName,
    name,
  };
};
