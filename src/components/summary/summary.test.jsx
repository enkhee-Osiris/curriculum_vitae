import React from 'react';
import { shallow } from 'enzyme';
import Summary from './Summary';
import List from '../list/List';

describe('<Summary />', () => {
  const props = {
    items: ['test'],
  };

  it('should be defined', () => {
    expect(Summary).toBeDefined();
  });

  it('renders correctly', () => {
    const summary = shallow(<Summary {...props} />);

    expect(summary).toMatchSnapshot();
  });

  it('renders h3', () => {
    const summary = shallow(<Summary {...props} />);
    const title = <h3>Summary</h3>;

    expect(summary.contains(title)).toEqual(true);
  });

  it('renders List', () => {
    const summary = shallow(<Summary {...props} />);
    const list = <List items={props.items} />;

    expect(summary.contains(list)).toEqual(true);
  });
});
