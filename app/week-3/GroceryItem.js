export default function Item({ name, quantity, category }) {
  return (
    <li className="border border-black rounded p-3 mb-4">
      <p className="text-base">{name}</p>
      <p className="text-base">Quantity: {quantity}</p>
      <p className="text-base">
        Category: {category.charAt(0).toUpperCase() + category.slice(1)}
      </p>
    </li>
  );
}
