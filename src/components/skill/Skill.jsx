import React, { Fragment } from 'react';
import { objectOf, string } from 'prop-types';
import Table from '../table/Table';

const Skill = ({ datas }) => (
  <Fragment>
    <h3>Skills</h3>
    <Table datas={datas} />
  </Fragment>
);

Skill.propTypes = {
  datas: objectOf(string).isRequired,
};

export { Skill as default };
