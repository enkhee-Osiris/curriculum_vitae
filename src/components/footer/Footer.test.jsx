import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('<Footer />', () => {
  it('should be defined', () => {
    expect(Footer).toBeDefined();
  });

  it('renders correctly', () => {
    const footer = shallow(<Footer />);

    expect(footer).toMatchSnapshot();
  });

  it('renders <3', () => {
    const footer = shallow(<Footer />);

    expect(footer.find('span').text()).toEqual(' ♥ ');
  });

  it('renders text', () => {
    const footer = shallow(<Footer />);

    expect(footer.text()).toEqual('Crafted with ♥ by Osiris.');
  });
});
