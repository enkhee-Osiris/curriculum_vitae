import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('<List />', () => {
  const props = {
    items: ['test'],
  };

  it('should be defined', () => {
    expect(List).toBeDefined();
  });

  it('renders correctly', () => {
    const list = shallow(<List {...props} />);

    expect(list).toMatchSnapshot();
  });

  it('renders li', () => {
    const list = shallow(<List {...props} />);

    expect(list.find('li').length).toBeGreaterThan(0);
  });

  it('renders items', () => {
    const list = shallow(<List {...props} />);

    expect(list.find('li').text()).toEqual('test');
  });
});
