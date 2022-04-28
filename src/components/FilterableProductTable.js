import React, { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const FilterableProductTable = (props) => {
  const [inStock, setInStock] = useState(false);
  const [filterText, setFilterText] = useState("");

  return (
    <div className="border border-2 border-warning p-3 rounded">
      <SearchBar inStock={inStock} setInStock={setInStock} filterText={filterText} setFilterText={setFilterText} />
      <br />
      <ProductTable inStock={inStock} filterText={filterText} products={props.products} />
    </div>
  );
};

export default FilterableProductTable;
