import { v4 as uuidv4 } from 'uuid';

function List({ items }) {
  return (
    <ul className="space-y-1 list-disc list-inside">
      {items.map((item) => (
        <li key={uuidv4()}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
