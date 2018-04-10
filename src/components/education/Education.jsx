import React, { Fragment } from 'react';
import List from '../list/List';

function Education() {
  return (
    <Fragment>
      <h3>Education</h3>
      <div>
        B.S. in Mongolian University of Science and Technology, Ulaanbaatar (2013 - 2018)
        <List items={['Major in Computer Science']} />
      </div>
    </Fragment>
  );
}

export default Education;
