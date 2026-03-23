"use client";

import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function Week8Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  function handleItemSelect(item) {
    let cleaned = item.name
      .split(",")[0]       
      .replace(/[\u{1F300}-\u{1FAFF}]/gu, "") 
      .trim();

    setSelectedItemName(cleaned);
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Shopping List + Meal Ideas
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        
        <div className="md:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <div className="mt-6">
            <ItemList
              items={items}
              onItemSelect={handleItemSelect}
            />
          </div>
        </div>

        <div className="md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>

      </div>
    </main>
  );
}