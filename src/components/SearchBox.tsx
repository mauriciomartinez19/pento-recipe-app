import "./styles/search-box.css";

interface SearchBoxProps {
  fetchData: (name: string) => void;
  updateFilters(e: React.ChangeEvent<HTMLSelectElement>): void;
}

const SearchBox = ({ fetchData, updateFilters }: SearchBoxProps) => {
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
            <option value="">
              Area
            </option>
            <option value="American">American</option>
            <option value="British">British</option>
            <option value="Canadian">Canadian</option>
          </select>
          <select name="category" defaultValue="" onChange={updateFilters}>
            <option value="">
              Category
            </option>
            <option value="Beef">Beef</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
