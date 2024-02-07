import "./App.css";
import MealTable from "./components/MealTable";
import SearchBox from "./components/SearchBox";
import { useMeals } from "./hooks/useMeals";

function App() {
  const { handleName, meals, loading, updateFilters, error } = useMeals();
  return (
    <div className="app">
      <h1 className="title">Pento Receipe App</h1>
      <div className="section-wrapper">
        <SearchBox handleName={handleName} updateFilters={updateFilters} />
      </div>
      <div className="section-wrapper">
        <MealTable meals={meals} loading={loading} error={error} />
      </div>
    </div>
  );
}

export default App;
