import React, { Fragment } from 'react';
import List from '../list/List';

function Summary() {
  const summaryItems = [
    'Full-Stack developer with 3 years of experience.',
    'Experience in Software Development including Analysis, Design, Development and Testing.',
    'Experience in Functional and Object Orieted Programming.',
    'Experience with CI/CD.'
  ]
  return(
    <Fragment>
      <h3>Summary</h3>
      <List items={summaryItems} />
    </Fragment>
  );
}

export default Summary;
