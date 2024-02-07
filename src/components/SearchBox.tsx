import { useFilters } from "../hooks/useFilters";
import "./styles/search-box.css";

interface SearchBoxProps {
  fetchData: (name: string) => void;
  updateFilters(e: React.ChangeEvent<HTMLSelectElement>): void;
}

const SearchBox = ({ fetchData, updateFilters }: SearchBoxProps) => {
  const { filters, loading, error } = useFilters();
  if (loading) {
    return <p>Fetching filters...</p>;
  }
  if (!!error) {
    return <p>{error}</p>;
  }
  return (
    <form id="search-box">
      <div className="input-group">
        <div className="search-bar-wrapper">
          <input
            onChange={(e) => {
              fetchData(e.target.value);
            }}
            type="text"
            placeholder="Search by name"
          />
        </div>
        <div className="filters-box">
          <div>Filters:</div>
          <select name="area" defaultValue="" onChange={updateFilters}>
            <option value="">Area</option>
            {filters?.areas.map((area) => {
              return (
                <option key={area} value={area}>
                  {area}
                </option>
              );
            })}
          </select>
          <select name="category" defaultValue="" onChange={updateFilters}>
            <option value="">Category</option>
            {filters?.categories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
