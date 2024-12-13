import React, { useState } from "react";
import imgone from '../assets/img1.png'
const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState("purple");
  const [selectedSize, setSelectedSize] = useState("M");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const bandColors = ["purple", "blue", "green"];
  const sizes = ["S", "M", "L", "XL"];
  const price = 79.0;

  const addToCart = () => {
    const item = {
      id: Date.now(),
      color: selectedColor,
      size: selectedSize,
      quantity: 1,
      price,
    };
    setCart([...cart, item]);
  };

  const toggleCartModal = () => setShowCart(!showCart);

  return (
    <div className="p-8 container mx-auto flex items-center justify-center h-screen">
      {/* Product Section */}
      <div className="flex gap-8">
        {/* Thumbnail */}
        <div>
          <img
            src={imgone}
            alt="Smart Watch"
            className="w-96"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Classy Modern Smart Watch</h1>
          <p className="text-lg line-through text-gray-400">$99.00</p>
          <p className="text-xl font-bold text-purple-600">${price.toFixed(2)}</p>
          <p>
            I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born...
          </p>

          {/* Band Colors */}
          <div className="mt-4">
            <p className="font-semibold">Band Color:</p>
            <div className="flex gap-2 mt-2">
              {bandColors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-purple-600"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Wrist Sizes */}
          <div className="mt-4">
            <p className="font-semibold">Wrist Size:</p>
            <div className="flex gap-2 mt-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? "border-purple-600 bg-purple-100"
                      : "border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={addToCart}
            className="mt-4 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <button
          onClick={toggleCartModal}
          className="fixed bottom-4 right-4 px-6 py-2 bg-purple-600 text-white rounded shadow-lg"
        >
          Checkout ({cart.length})
        </button>
      )}

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <div className="mt-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-2 border-b">
                  <img
                    src={`/images/watch-${item.color}.png`}
                    alt="Cart Item"
                    className="w-16"
                  />
                  <div>
                    <p>{`Color: ${item.color}`}</p>
                    <p>{`Size: ${item.size}`}</p>
                    <p>{`Price: $${item.price.toFixed(2)}`}</p>
                  </div>
                  <p>{`Qty: ${item.quantity}`}</p>
                </div>
              ))}
            </div>
            <button
              onClick={toggleCartModal}
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
