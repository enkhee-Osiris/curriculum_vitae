import React, { Fragment } from 'react';
import { arrayOf, string } from 'prop-types';
import List from '../list/List';

const Hobby = ({ items }) => (
  <Fragment>
    <h3>Hobbies</h3>
    <List items={items} />
  </Fragment>
);

Hobby.propTypes = {
  items: arrayOf(string).isRequired,
};

export { Hobby as default };
