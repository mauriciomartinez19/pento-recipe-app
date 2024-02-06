import { MappedMeal } from "../types/meals";
import "./styles/table.css";

interface Props {
  meals: MappedMeal[];
}

const MealTable = ({ meals }: Props) => {
  return (
    <div id="meal-table" className="container">
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
          {meals.map((meal) => {
            const { id, image, name, area, category } = meal;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td className="name-cell">
                  {image && name && <img src={image} alt={name} />}
                  {name}
                </td>
                <td>{area}</td>
                <td>{category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MealTable;
