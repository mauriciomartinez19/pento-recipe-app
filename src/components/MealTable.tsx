import "./styles/table.css";

const MealTable = () => {
  return (
    <div id="meal-table" className="container">
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Area</th>
          <th>Category</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Spaghetti</td>
            <td>Italian</td>
            <td>Pasta</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MealTable;
