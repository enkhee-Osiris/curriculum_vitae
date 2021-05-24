import List from './List';

function MultiList({ data }) {
  return (
    <div className="space-y-4">
      {data.map(({ id, description, items }) => (
        <div key={id}>
          <p className="mb-1">{description}</p>
          <List items={items} />
        </div>
      ))}{' '}
    </div>
  );
}

export default MultiList;
