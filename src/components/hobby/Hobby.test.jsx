import React from 'react';
import { shallow } from 'enzyme';
import Hobby from './Hobby';
import List from '../list/List';

describe('<Hobby />', () => {
  const props = {
    items: ['test'],
  };

  it('should be defined', () => {
    expect(Hobby).toBeDefined();
  });

  it('renders correctly', () => {
    const hobby = shallow(<Hobby {...props} />);

    expect(hobby).toMatchSnapshot();
  });

  it('renders h3', () => {
    const hobby = shallow(<Hobby {...props} />);
    const title = <h3>Hobbies</h3>;

    expect(hobby.contains(title)).toEqual(true);
  });

  it('renders List', () => {
    const hobby = shallow(<Hobby {...props} />);
    const list = <List items={props.items} />;

    expect(hobby.contains(list)).toEqual(true);
  });
});
