"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      id: Math.random().toString(36).substring(2, 9),
      name: name.trim(),
      quantity,
      category,
    };

    // Rubric requirement: alert showing the form info
    alert(`Added item:\nName: ${item.name}\nQuantity: ${item.quantity}\nCategory: ${item.category}`);

    // Vercel requirement: lift state up
    onAddItem(item);

    // reset fields
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 rounded-md border max-w-sm">
      <div className="mb-3">
        <label className="block mb-1 font-medium" htmlFor="name">
          Item Name
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 rounded border bg-white text-black dark:bg-zinc-900 dark:text-white"
          placeholder="e.g., Milk"
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1 font-medium" htmlFor="quantity">
          Quantity
        </label>
        <input
          id="quantity"
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full p-2 rounded border bg-white text-black dark:bg-zinc-900 dark:text-white"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium" htmlFor="category">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 rounded border bg-white text-black dark:bg-zinc-900 dark:text-white"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black"
      >
        Add Item
      </button>
    </form>
  );
}
