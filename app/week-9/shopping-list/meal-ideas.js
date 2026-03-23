"use client";

import { useState, useEffect } from "react";

//fetch function
async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch meals");
  }

  const data = await response.json();
  return data.meals || [];
}

// Component
export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function loadMealIdeas() {
    if (!ingredient) return;

    try {
      setLoading(true);
      setError(null);

      const results = await fetchMealIdeas(ingredient);
      setMeals(results);
    } catch (err) {
      setError("Error loading meal ideas.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">
        {ingredient
        ? `Meal ideas for "${ingredient}"`
        : "Meal ideas (select an item)"}
        </h2>
        
        {!ingredient && (
          <p className="text-gray-500">
            Choose an item to see ideas.
            </p>
          )}

      {loading && <p>Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && meals.length > 0 && (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="border p-2 rounded bg-slate-100"
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}

      {!loading && !error && ingredient && meals.length === 0 && (
        <p>No meal ideas found.</p>
      )}
    </div>
  );
}