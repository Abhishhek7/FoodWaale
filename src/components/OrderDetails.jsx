import React, { useState } from "react";
import { useCart } from "../Context/CartContext"; // Import cart context
import { useNavigate } from "react-router-dom";
import { 
  FaLeaf, 
  FaDrumstickBite, 
  FaCoffee, 
  FaUtensils, 
  FaHamburger, 
  FaCocktail 
} from "react-icons/fa";

const OrderDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState("Light Food");
  const [quantities, setQuantities] = useState({});
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const menuData = {
    "Light Food": [
      { id: 1, name: "Greek Salad", price: 8.99, icon: <FaLeaf /> },
      { id: 2, name: "Avocado Toast", price: 7.49, icon: <FaUtensils /> },
      { id: 3, name: "Fruit Bowl", price: 6.99, icon: <FaLeaf /> },
      { id: 10, name: "Caesar Salad", price: 9.49, icon: <FaLeaf /> },
    ],
    "Heavy Food": [
      { id: 4, name: "Grilled Steak", price: 18.99, icon: <FaDrumstickBite /> },
      { id: 5, name: "BBQ Ribs", price: 22.99, icon: <FaHamburger /> },
      { id: 6, name: "Stuffed Burger", price: 15.99, icon: <FaHamburger /> },
      { id: 11, name: "Pasta Alfredo", price: 14.99, icon: <FaUtensils /> },
      { id: 12, name: "Chicken Parmesan", price: 16.99, icon: <FaDrumstickBite /> },
    ],
    Beverages: [
      { id: 7, name: "Lemonade", price: 3.99, icon: <FaCocktail /> },
      { id: 8, name: "Cold Brew Coffee", price: 4.49, icon: <FaCoffee /> },
      { id: 9, name: "Mango Smoothie", price: 5.99, icon: <FaCocktail /> },
      { id: 13, name: "Green Tea", price: 2.99, icon: <FaCoffee /> },
    ],
  };

  const handleQuantityChange = (id, change) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) + change, 0),
    }));
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      {/* Category Tabs */}
      <div className="flex justify-center space-x-10 border-b-2 border-gray-300 pb-4">
        {Object.keys(menuData).map((category) => (
          <div
            key={category}
            className={`text-xl font-semibold px-6 py-2 cursor-pointer transition duration-300 ${
              selectedCategory === category
                ? "text-green-600 border-b-4 border-green-600"
                : "text-gray-600 hover:text-green-500"
            }`}
            onMouseEnter={() => setSelectedCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {menuData[selectedCategory].map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition duration-300"
          >
            <div className="text-green-600 text-4xl">{item.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mt-3">{item.name}</h3>
            <p className="text-gray-600 mt-1 text-lg font-medium">${item.price.toFixed(2)}</p>

            {/* Quantity Controls */}
            <div className="flex items-center mt-4 space-x-4">
              <button
                className="px-3 py-2 cursor-pointer bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
                onClick={() => handleQuantityChange(item.id, -1)}
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantities[item.id] || 0}</span>
              <button
                className="px-3 py-2 cursor-pointer bg-green-500 text-white rounded-lg hover:bg-green-700 transition"
                onClick={() => handleQuantityChange(item.id, 1)}
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              className="mt-4 w-full py-2 bg-blue-600 text-white cursor-pointer font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => addToCart({ ...item, quantity: quantities[item.id] || 1 })}
            >
              Add to Cart
            </button>

            {/* Buy Now Button (Navigates to Payment Page) */}
            <button
              className="mt-4 w-full py-2 bg-green-400 cursor-pointer text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
              onClick={() => {
                addToCart({ ...item, quantity: quantities[item.id] || 1 });
                setTimeout(() => navigate("/payment"), 100); // Ensures cart updates before navigating
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OrderDetails;
