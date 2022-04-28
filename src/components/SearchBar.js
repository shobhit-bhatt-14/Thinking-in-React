import React from "react";

const SearchBar = (props) => {
  const handleFilterTextChange = (e) => {
    props.setFilterText(e.target.value);
  };

  const handleInStockChange = (e) => {
    props.setInStock(e.target.checked);
  };

  return (
    <form className="border border-2 border-primary p-2 rounded" action="">
      <div className="mb-3">
        <input
          type="text"
          value={props.filterText}
          className="form-control"
          placeholder="Search..."
          onChange={handleFilterTextChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="checkbox"
          checked={props.inStock}
          className="form-check-input"
          onChange={handleInStockChange}
        />
        <label className="form-check-label">
          &nbsp;Only show products in stock
        </label>
      </div>
    </form>
  );
};

export default SearchBar;
