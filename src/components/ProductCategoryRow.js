import React from "react";

const ProductCategoryRow = (props) => {
  return (
    <tr>
      <th className="border border-2 border-info rounded" colSpan="2">
        {props.category}
      </th>
    </tr>
  );
};

export default ProductCategoryRow;
