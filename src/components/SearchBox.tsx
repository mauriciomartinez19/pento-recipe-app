import "./styles/search-box.css";

const SearchBox = () => {
  return (
    <form id="search-box">
      <div className="input-group">
        <div className="search-bar-wrapper">
          <input />
        </div>
        <div className="filters-box">
          <div>Filters:</div>
          <select>
            <option value="" disabled>
              Area
            </option>
            <option value="American">American</option>
            <option value="British">British</option>
            <option value="Canadian">Canadian</option>
          </select>
          <select>
            <option value="" disabled>
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
