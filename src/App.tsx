import "./App.css";
import "./styles/inputs.css";
import MealTable from "./components/MealTable";
import SearchBox from "./components/SearchBox";
import { useMeals } from "./hooks/useMeals";

function App() {
  const { fetchData, meals, loading } =
    useMeals();
  return (
    <div className="app">
      <h1 className="title">Pento Receipe App</h1>
      <div className="section-wrapper">
        <SearchBox
          fetchData={fetchData}
        />
      </div>
      <div className="section-wrapper">
        {loading && <p>Fetching meals...</p>}
        {!!meals?.length ? <MealTable meals={meals} /> : <p>No meals to display, please search for a different term.</p>}
      </div>
    </div>
  );
}

export default App;
