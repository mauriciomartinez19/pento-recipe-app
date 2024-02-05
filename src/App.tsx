import "./App.css";
import "./styles/inputs.css";
import MealTable from "./components/MealTable";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="app">
      <h1 className="title">Pento Receipe App</h1>
      <div className="section-wrapper">
        <SearchBox />
      </div>
      <div className="section-wrapper">
        <MealTable />
      </div>
    </div>
  );
}

export default App;
