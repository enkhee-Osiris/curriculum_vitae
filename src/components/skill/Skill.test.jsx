import React from 'react';
import { shallow } from 'enzyme';
import Skill from './Skill';
import Table from '../table/Table';

describe('<Skill />', () => {
  const props = {
    datas: {
      Type: 'test',
    },
  };

  it('should be defined', () => {
    expect(Skill).toBeDefined();
  });

  it('renders correctly', () => {
    const skill = shallow(<Skill {...props} />);

    expect(skill).toMatchSnapshot();
  });

  it('renders h3', () => {
    const skill = shallow(<Skill {...props} />);
    const title = <h3>Skills</h3>;

    expect(skill.contains(title)).toEqual(true);
  });

  it('renders Table', () => {
    const skill = shallow(<Skill {...props} />);
    const table = <Table datas={props.datas} />;

    expect(skill.contains(table)).toEqual(true);
  });
});
