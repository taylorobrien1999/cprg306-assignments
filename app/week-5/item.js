"use client";

import { useState } from "react";

export default function Item({ name, quantity, category }) {
  const [itemQuantity, setItemQuantity] = useState(Number(quantity) || 1);

  const increment = () => {
    if (itemQuantity < 99) {
      setItemQuantity(itemQuantity + 1);
    }
  };

  const decrement = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  return (
    <li className="bg-slate-800 p-4 rounded-lg flex items-center justify-between">
      <div>
        <p className="text-lg font-semibold text-white">{name}</p>
        <p className="text-sm text-slate-300 capitalize">{category}</p>
      </div>
      
      <div className="flex items-center gap-3">
        <button
          onClick={decrement}
          disabled={itemQuantity <= 1}
          className={`px-3 py-1 rounded font-bold ${
            itemQuantity <= 1 
            ? "bg-gray-600 text-gray-400" 
            : "bg-blue-500 text-white"
          }`}
        >
          −
        </button>
        
        <span className="text-white font-semibold w-8 text-center">
          {itemQuantity}
        </span>
        
        <button
          onClick={increment}
          disabled={itemQuantity >= 99}
          className={`px-3 py-1 rounded font-bold ${
            itemQuantity >= 99 
              ? "bg-slate-700 text-slate-500 cursor-not-allowed" 
              : "bg-slate-600 text-white hover:bg-slate-500"
          }`}
        >
          +
        </button>
      </div>
    </li>
  );
}