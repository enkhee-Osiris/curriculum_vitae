import React from 'react';
import { shallow } from 'enzyme';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Experience from './Experience';
import List from '../list/List';

describe('<Experience />', () => {
  const props = {
    datas: [
      {
        id: 1,
        position: 'test position',
        company: 'test comp',
        items: [
          'test item',
        ],
        date: 'April 2017 - present',
      },
    ],
  };

  it('should be defined', () => {
    expect(Experience).toBeDefined();
  });

  it('renders correctly', () => {
    const experience = shallow(<Experience {...props} />);

    expect(experience).toMatchSnapshot();
  });

  it('renders h3', () => {
    const experience = shallow(<Experience {...props} />);
    const title = <h3>Experience</h3>;

    expect(experience.contains(title)).toEqual(true);
  });

  it('renders VerticalTimeline', () => {
    const experience = shallow(<Experience {...props} />);

    expect(experience.find(VerticalTimeline).length).toBeGreaterThan(0);
  });

  it('renders VerticalTimelineElement', () => {
    const experience = shallow(<Experience {...props} />);

    expect(experience.find(VerticalTimelineElement).length).toBeGreaterThan(0);
  });

  it('renders List', () => {
    const experience = shallow(<Experience {...props} />);

    expect(experience.find(List).length).toBeGreaterThan(0);
  });

  it('renders timeline datas', () => {
    const experience = shallow(<Experience {...props} />);

    expect(experience.find('h4').first().text()).toEqual(props.datas[0].position);
    expect(experience.find('h5').first().text()).toEqual(props.datas[0].company);
  });
});
