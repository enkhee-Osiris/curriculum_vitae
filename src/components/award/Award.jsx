import React, { Fragment } from 'react';
import { arrayOf, string } from 'prop-types';
import List from '../list/List';

const Award = ({ items }) => (
  <Fragment>
    <h3>Honors and Awards</h3>
    <List items={items} />
  </Fragment>
);

Award.propTypes = {
  items: arrayOf(string).isRequired,
};

export { Award as default };
