import React, { Fragment } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import List from '../list/List';

const Education = ({ datas }) => {
  const divs = datas.map(data => (
    <div key={data.id}>
      {data.description}
      <List items={data.items} />
    </div>
  ));

  return (
    <Fragment>
      <h3>Education</h3>
      {divs}
    </Fragment>
  );
};

Education.propTypes = {
  datas: arrayOf(shape({ id: number, description: string, items: arrayOf(string) })).isRequired,
};

export { Education as default };
