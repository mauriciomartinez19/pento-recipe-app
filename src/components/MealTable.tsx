import { useState } from "react";
import { MappedMeal } from "../types/meals";
import "./styles/table.css";
import { Pagination } from "../utils/pagination";
import TableRow from "./TableRow";

interface Props {
  meals?: MappedMeal[];
  loading: boolean;
  error?: string;
}

const MealTable = ({ meals, loading, error }: Props) => {
  const [page, setPage] = useState(1);
  if (loading) return <p>Fetching meals...</p>;
  if (error) return <p>{error}</p>;
  if (!meals?.length)
    return <p>No meals to display, please search for a different term.</p>;
  return (
    <div id="meal-table">
      <div className="wrapper">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Area</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {Pagination.getItems(meals, page).map((meal) => (
              <TableRow meal={meal} key={meal.id} />
            ))}
          </tbody>
        </table>
      </div>
      <div id="pagination">
        {Pagination.getPageNumbers(meals).map((number) => (
          <button
            key={number}
            onClick={() => setPage(number)}
            disabled={page === number}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MealTable;
