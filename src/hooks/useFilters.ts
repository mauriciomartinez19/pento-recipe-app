import { useEffect, useState } from "react";
import { Filters } from "../api/filters";

export const useFilters = () => {
  const [filters, setFilters] = useState<{
    categories: string[];
    areas: string[];
  }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const getFilters = async () => {
      setLoading(true);
      const { categories, areas, errorMessage } = await Filters.getFilters();
      if (errorMessage) {
        setError(errorMessage);
      } else {
        setFilters({
          categories: categories as string[],
          areas: areas as string[],
        });
      }
      setLoading(false);
    };
    getFilters();
  }, []);
  return { filters, loading, error };
};
