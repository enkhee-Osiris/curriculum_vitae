import React from 'react';
import { objectOf, string } from 'prop-types';

function Table(props) {
  const { data } = props;
  const rows = Object.keys(data).map(key => (
    <tr>
      <td style={{ 'font-weight': '500' }}>{key}</td>
      <td>{data[key]}</td>
    </tr>));

  return (
    <table className="u-full-width">
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: objectOf(string).isRequired,
};

export default Table;
