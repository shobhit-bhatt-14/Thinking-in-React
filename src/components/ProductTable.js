import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = (props) => {
  let rows = [];
  let lastCategory = null;

  props.products.map((product) => {
    if (/^[a-zA-Z\s]+$/.test(props.filterText)) {
      if (product.name.toLowerCase().indexOf(props.filterText.toLowerCase()) == -1)
        return;
    } else if (/^[<>]+[0-9]+$/.test(props.filterText)) {
        return;
    } else if (/^[0-9]+[<>]+$/.test(props.filterText)) {
        return;
    }

    if (props.inStock && !product.stocked) return;

    if (product.category != lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
      lastCategory = product.category;
    }

    rows.push(<ProductRow key={product.name} product={product} />);
  });

  return (
    <div className="border border-2 border-success p-1 rounded">
      <table className="table-borderless w-100">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default ProductTable;
