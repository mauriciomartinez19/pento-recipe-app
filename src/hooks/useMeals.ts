import { useEffect, useRef, useState } from "react";
import { Meals } from "../api/meals";
import { MappedMeal } from "../types/meals";

export const useMeals = () => {
  const debounceRef = useRef<NodeJS.Timeout>();
  const [meals, setMeals] = useState<MappedMeal[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [filters, setFilters] = useState<{ category: string; area: string }>({category:'', area:''})
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

  const updateFilters = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
  }

  const filterData = () => {
    return meals?.filter((meal) => {
      if(filters.category && filters.area) {
        return meal.category === filters.category && meal.area === filters.area
      } else if(filters.category) {
        return meal.category === filters.category
      } else if(filters.area) {
        return meal.area === filters.area
      }
      return meal
    })
  }
  

  return {
    meals: filterData(),
    loading,
    error,
    fetchData,
    filterData,
    updateFilters
  };
};
