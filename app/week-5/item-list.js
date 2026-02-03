"use client";

import { useState } from "react";
import items from "./items.json";
import Item from "./item";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${
            sortBy === "name" 
              ? "bg-blue-600 text-white" 
              : "bg-slate-700 text-white hover:bg-slate-600"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${
            sortBy === "category" 
              ? "bg-blue-600 text-white" 
              : "bg-slate-700 text-white hover:bg-slate-600"
          }`}
        >
          Sort by Category
        </button>
      </div>
      
      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item 
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}