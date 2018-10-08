import React from 'react';
import { shallow } from 'enzyme';
import Award from './Award';
import List from '../list/List';

describe('<Award />', () => {
  const props = {
    items: ['test'],
  };

  it('should be defined', () => {
    expect(Award).toBeDefined();
  });

  it('renders correctly', () => {
    const hobby = shallow(<Award {...props} />);

    expect(hobby).toMatchSnapshot();
  });

  it('renders h3', () => {
    const hobby = shallow(<Award {...props} />);
    const title = <h3>Hobbies</h3>;

    expect(hobby.contains(title)).toEqual(true);
  });

  it('renders List', () => {
    const hobby = shallow(<Award {...props} />);
    const list = <List items={props.items} />;

    expect(hobby.contains(list)).toEqual(true);
  });
});
