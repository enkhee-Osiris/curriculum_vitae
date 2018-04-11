import React from 'react';
import { shallow } from 'enzyme';
import Table from './Table';

describe('<Table />', () => {
  const props = {
    datas: { key: 'value' },
  };

  it('should be defined', () => {
    expect(Table).toBeDefined();
  });

  it('renders correctly', () => {
    const table = shallow(<Table {...props} />);

    expect(table).toMatchSnapshot();
  });

  it('renders tr', () => {
    const table = shallow(<Table {...props} />);

    expect(table.find('tr').length).toBeGreaterThan(0);
  });

  it('renders table datas', () => {
    const table = shallow(<Table {...props} />);

    expect(table.find('tr > td').first().text()).toEqual('key');
  });
});
