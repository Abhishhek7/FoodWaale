import React, { useState, useEffect } from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { cart, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [isPurchased, setIsPurchased] = useState(false);
  const navigate = useNavigate();

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = totalAmount > 50 ? totalAmount * 0.1 : 0;
  const finalPrice = totalAmount - discount;

  const handlePayment = () => {
    setIsPurchased(true);
    setTimeout(() => {
      clearCart();
      navigate("/");
    }, 3000);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 text-center border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Options</h2>
      <div className="flex justify-center gap-6 mb-6">
        <button
          className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${
    paymentMethod === "cash" ? "bg-green-600 text-white" : "bg-gray-300" }`}
          onClick={() => setPaymentMethod("cash")}
        >
          Pay with Cash
        </button>
        <button
          className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${
    paymentMethod === "card" ? "bg-blue-600 text-white" : "bg-gray-300" }`}
          onClick={() => setPaymentMethod("card")}
        >
          Pay with Card
        </button>
      </div>

      {paymentMethod === "card" && (
        <div className="mb-6">
          <input type="text" placeholder="Card Number" className="w-full px-4 py-2 border rounded-lg mb-3" />
          <input type="text" placeholder="Cardholder Name" className="w-full px-4 py-2 border rounded-lg mb-3" />
          <div className="flex gap-4">
            <input type="text" placeholder="MM/YY" className="w-1/2 px-4 py-2 border rounded-lg" />
            <input type="text" placeholder="CVV" className="w-1/2 px-4 py-2 border rounded-lg" />
          </div>
        </div>
      )}

      <p className="text-xl font-semibold">Total Amount: ${finalPrice.toFixed(2)}</p>
      {discount > 0 && <p className="text-green-500">Discount Applied: ${discount.toFixed(2)}</p>}
      <button
        className="mt-4 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
        onClick={handlePayment}
      >
        Confirm Payment
      </button>

      {isPurchased && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md">
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg text-center w-96 transform transition-all duration-300 scale-100 opacity-100">
            <h2 className="text-2xl font-bold mb-4">✅ Thank you for your purchase!</h2>
            <p className="text-lg">Total Paid: <span className="font-semibold">${finalPrice.toFixed(2)}</span></p>
            {discount > 0 && <p className="text-green-400">Discount Applied: ${discount.toFixed(2)}</p>}
            <p className="text-sm text-gray-400 mt-2">Redirecting to home page...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;