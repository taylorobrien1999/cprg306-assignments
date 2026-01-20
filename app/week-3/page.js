import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>

      <div className="max-w-xl">
        <GroceryItemList />
      </div>

    </main>
  );
}

