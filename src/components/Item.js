import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCart() {
    setIsInCart((isInCart) => !isInCart);
  }
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {isInCart ? (
        <button className="add" onClick={handleAddToCart}>
          Remove From Cart
        </button>
      ) : (
        <button className="add" onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}
    </li>
  );
}

export default Item;
