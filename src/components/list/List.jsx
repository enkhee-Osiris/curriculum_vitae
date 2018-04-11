import React from 'react';
import { arrayOf, string } from 'prop-types';

const List = ({ items }) => {
  /* eslint-disable react/no-array-index-key */
  const listItems = items.map((item, index) => (
    <li key={index}>
      {item}
    </li>));

  return <ul>{listItems}</ul>;
};

List.propTypes = {
  items: arrayOf(string).isRequired,
};

export { List as default };
