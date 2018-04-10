import React from 'react';
import { arrayOf, string } from 'prop-types';

function List(props) {
  const { items } = props;
  const listItems = items.map(item => (
    <li>
      {item}
    </li>));

  return (
    <ul>{listItems}</ul>
  );
}

List.propTypes = {
  items: arrayOf(string).isRequired,
};

export default List;
