import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  it('should be defined', () => {
    expect(Header).toBeDefined();
  });

  it('renders correctly', () => {
    const header = shallow(<Header />);

    expect(header).toMatchSnapshot();
  });

  it('renders img', () => {
    const header = shallow(<Header />);

    expect(header.find('img').length).toBeGreaterThan(0);
  });

  it('renders h2', () => {
    const header = shallow(<Header />);
    const text = <h2>Enkh-Erdene Bolormaa</h2>;

    expect(header.contains(text)).toEqual(true);
  });

  it('renders h3', () => {
    const header = shallow(<Header />);
    const text = <h3>Full-Stack Web Developer</h3>;

    expect(header.contains(text)).toEqual(true);
  });
});
