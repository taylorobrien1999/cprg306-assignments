"use client";
import { useState, useEffect } from "react";
import { useUserAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "./_services/shopping-list-service";
import Navbar from "../components/Navbar";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  async function loadItems() {
    if (!user) return;
    const fetchedItems = await getItems(user.uid);
    setItems(fetchedItems);
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  if (user === undefined) {
    return <main style={{ padding: "2rem" }}><p>Loading...</p></main>;
  }

  if (!user) {
    return (
      <main style={{ padding: "2rem" }}>
        <p>You must be logged in to view this page.</p>
        <button onClick={() => router.push("/week-10")}>
          Back to Login
        </button>
      </main>
    );
  }

  async function handleAddItem(newItem) {
    const id = await addItem(user.uid, newItem);
    setItems((prev) => [...prev, { id, ...newItem }]);
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
       <Navbar />
      <h1 className="text-2xl font-bold mb-6">
        Shopping List + Meal Ideas
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <div className="mt-6">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>
        <div className="md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}