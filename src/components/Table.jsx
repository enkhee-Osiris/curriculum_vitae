function Table({ data }) {
  return (
    <table className="w-full min-w-screen-md">
      <tbody className="divide-y divide-black dark:divide-gray-500">
        {Object.keys(data).map((key) => (
          <tr key={`table_${key.toLowerCase()}`}>
            <td className="py-2 font-medium">{key}</td>
            <td className="py-2">{data[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
