"use client";

import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./new-item";

export default function Week7Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />

      <div className="mt-6">
        <ItemList items={items} />
      </div>
      
      <section className="mt-10 p-4 border rounded bg-slate-100 text-black">
        <h2 className="text-lg font-semibold mb-2">Wireframe</h2>
        <p>[ New Item Form ]</p>
        <p>[ Sort Buttons ]</p>
        <p>[ Grocery Item List ]</p>
        </section>
    </main>
  );
}