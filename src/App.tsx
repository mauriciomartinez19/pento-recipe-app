import "./App.css";
import "./styles/inputs.css";
import MealTable from "./components/MealTable";
import SearchBox from "./components/SearchBox";
import { useMeals } from "./hooks/useMeals";

function App() {
  const { updateName, name } =
    useMeals();
  return (
    <div className="app">
      <h1 className="title">Pento Receipe App</h1>
      <div className="section-wrapper">
        <SearchBox
          name={name}
          updateName={updateName}
        />
      </div>
      <div className="section-wrapper">
        <MealTable />
      </div>
    </div>
  );
}

export default App;
