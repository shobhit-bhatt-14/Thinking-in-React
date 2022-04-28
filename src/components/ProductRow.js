import React from "react";

const ProductRow = (props) => {
  return (
      <tr>
          <td className={props.product.stocked ? "text-dark" : "text-danger" }>{props.product.name}</td>
          <td>{props.product.price}</td>
      </tr>
  )
};

export default ProductRow;
