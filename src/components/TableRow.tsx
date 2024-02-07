import { MappedMeal } from "../types/meals";

interface Props {
  meal: MappedMeal
}

const TableRow = ({meal}:Props) => {
  const { id, image, name, area, category } = meal;
  return (
    <tr>
      <td>{id}</td>
      <td className="name-cell">
        {image && name && <img src={image} alt={name} />}
        {name}
      </td>
      <td>{area}</td>
      <td>{category}</td>
    </tr>
  );
};

export default TableRow;
