import React from "react";
import Product from "./Product";

function ProductContainer({ product }) {
 
  return (    
    <Product product={product} />
  )
}

export default React.memo(ProductContainer);