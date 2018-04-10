import React from 'react';

function Table(props) {
  const data = props.data;
  const rows = Object.keys(data).map((key) =>
    <tr>
      <td style={{ 'font-weight': '500' }}>{key}</td>
      <td>{data[key]}</td>
    </tr>
  );

  return(
    <table class="u-full-width">
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

export default Table;
