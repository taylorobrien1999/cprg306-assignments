export default function Item({ name, quantity, category }) {
  return (
    <li className="border border-black rounded p-3 mb-4">
      <p className="text-base font-medium">{name}</p>
      <p className="text-sm">Quantity: {quantity}</p>
      <p className="text-sm">
        Category: {category.charAt(0).toUpperCase() + category.slice(1)}
      </p>
    </li>
  );
}