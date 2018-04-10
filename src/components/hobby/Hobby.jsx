import React, { Fragment } from 'react';
import List from '../list/List';

function Hobby() {
  const hobbies = [
    'Hand lettering',
    'Calligraphy',
    'Origami',
    'Snowboarding',
    'Cycling',
    'Wall climbing',
    'Bowling',
  ];
  return (
    <Fragment>
      <h3>Hobbies</h3>
      <List items={hobbies} />
    </Fragment>
  );
}

export default Hobby;
