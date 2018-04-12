import React, { Fragment } from 'react';
import { arrayOf, string } from 'prop-types';
import List from '../list/List';

const Summary = ({ items }) => (
  <Fragment>
    <h3>Summary</h3>
    <List items={items} />
  </Fragment>
);

Summary.propTypes = {
  items: arrayOf(string).isRequired,
};

export { Summary as default };
