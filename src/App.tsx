import "./App.css";
import "./styles/inputs.css";
import MealTable from "./components/MealTable";
import SearchBox from "./components/SearchBox";
import { useMeals } from "./hooks/useMeals";

function App() {
  const { fetchData, meals, loading, updateFilters, error } = useMeals();
  return (
    <div className="app">
      <h1 className="title">Pento Receipe App</h1>
      <div className="section-wrapper">
        <SearchBox fetchData={fetchData} updateFilters={updateFilters} />
      </div>
      <div className="section-wrapper">
        <MealTable meals={meals} loading={loading} error={error}/>
      </div>
    </div>
  );
}

export default App;
