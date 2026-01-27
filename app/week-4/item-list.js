import items from "./items.json";
import Item from "./item";

export default function ItemList() {
  return (
    <ul className="list-none p-0 m-0">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
}