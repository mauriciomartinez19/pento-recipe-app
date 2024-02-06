import { useEffect, useRef, useState } from "react";
import { Meals } from "../api/meals";
import { MappedMeal } from "../types/meals";

export const useMeals = () => {
  const debounceRef = useRef<NodeJS.Timeout>();
  const [meals, setMeals] = useState<MappedMeal[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const getMeals = async (name: string = "") => {
    setLoading(true);
    const response = await Meals.getMeals({ name });
    setMeals(response?.data);
    setError(response?.errorMessage);
    setLoading(false);
  };
  
  useEffect(() => {
    getMeals();
  }, []);

  const fetchData = (name: string) => {
    if(debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    debounceRef.current = setTimeout(()=>getMeals(name), 500)
  };

  return {
    meals,
    loading,
    error,
    fetchData,
  };
};
