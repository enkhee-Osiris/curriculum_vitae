import React from 'react';
import { objectOf, string } from 'prop-types';

const Table = ({ datas }) => {
  const rows = Object.keys(datas).map(key => (
    <tr key={key}>
      <td style={{ fontWeight: 500 }}>{key}</td>
      <td>{datas[key]}</td>
    </tr>));

  return (
    <table className="u-full-width">
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  datas: objectOf(string).isRequired,
};

export { Table as default };
