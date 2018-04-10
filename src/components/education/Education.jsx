import React, { Fragment } from 'react';
import List from '../list/List';

function Education() {
  const educationList = [
    ''
  ]
  return(
    <Fragment>
      <h3>Education</h3>
      <div>
        B.A. in Mongolian University of Science and Technology, Ulaanbaatar (2013 - 2018)
        <List items={ ['test'] }/>
      </div>
    </Fragment>
  );
}

export default Education;
