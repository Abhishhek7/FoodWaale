import React, { useState, useEffect } from "react";
import { useCart } from "../Context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useCart();
  const [isPurchased, setIsPurchased] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("debit");
  const [paidAmount, setPaidAmount] = useState(null); // Store final price before clearing cart
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const discount = totalPrice > 50 ? totalPrice * 0.1 : 0;
  const finalPrice = totalPrice - discount;

  // Handle purchase
  const handleBuyNow = () => {
    if (cart.length === 0) return;
    setPaidAmount(finalPrice); // Save final price before clearing the cart
    setIsPurchased(true);
    clearCart(); // Clear cart after purchase
  };

  // Redirect to home page after purchase
  useEffect(() => {
    if (isPurchased) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isPurchased, navigate]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 relative bg-black text-white rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-lg text-center">
          Your cart is empty. {" "}
          <Link to="/menu" className="text-blue-500 cursor-pointer">Go to Menu</Link>
        </p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b border-gray-700 pb-4">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md" />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-400">${(item.quantity * item.price).toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button onClick={() => decreaseQuantity(item.id)} className="p-2 bg-gray-700 cursor-pointer rounded-md hover:bg-gray-600">
                  <FiMinus />
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="p-2 bg-gray-700 cursor-pointer rounded-md hover:bg-gray-600">
                  <FiPlus />
                </button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="p-2 bg-red-600 cursor-pointer rounded-md hover:bg-red-500">
                <FiTrash2 />
              </button>
            </div>
          ))}

          <div className="bg-gray-800 p-6 rounded-lg mt-6">
            <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
            {discount > 0 && <p className="text-green-400">Discount: -${discount.toFixed(2)}</p>}
            <p className="text-xl font-bold">Final Price: ${finalPrice.toFixed(2)}</p>
            
            {/* Payment Method */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Select Payment Method:</h3>
              <div className="flex space-x-4">
                <button onClick={() => setPaymentMethod("debit")} className={`px-4 py-2 rounded-lg ${paymentMethod === "debit" ? "bg-blue-600" : "bg-gray-700"}`}>Debit Card</button>
                <button onClick={() => setPaymentMethod("cash")} className={`px-4 py-2 rounded-lg ${paymentMethod === "cash" ? "bg-blue-600" : "bg-gray-700"}`}>Cash</button>
              </div>
            </div>

            {/* Buy Now Button */}
            <button
              onClick={handleBuyNow}
              className="mt-4 w-full py-3 bg-blue-600 hover:bg-blue-500 cursor-pointer text-white font-semibold rounded-lg text-center"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}

      {/* Payment Success Popup */}
      {isPurchased && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md">
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg text-center w-96 transform transition-all duration-300 scale-100 opacity-100">
            <h2 className="text-2xl font-bold mb-4">✅ Thank you for your purchase!</h2>
            <p className="text-lg">Total Paid: <span className="font-semibold">${paidAmount.toFixed(2)}</span></p>
            {discount > 0 && <p className="text-green-400">Discount Applied: ${discount.toFixed(2)}</p>}
            <p className="text-sm text-gray-400 mt-2">Redirecting to home page...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
