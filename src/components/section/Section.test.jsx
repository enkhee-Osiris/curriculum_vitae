import React from 'react';
import { shallow } from 'enzyme';
import Section from './Section';

describe('<Section />', () => {
  it('should be defined', () => {
    expect(Section).toBeDefined();
  });

  it('renders correctly', () => {
    const children = <div>test</div>;
    const section = shallow(<Section> {children} </Section>);

    expect(section).toMatchSnapshot();
  });

  it('renders children', () => {
    const children = <div>test</div>;
    const section = shallow(<Section> {children} </Section>);

    expect(section.contains(children)).toEqual(true);
  });
});
