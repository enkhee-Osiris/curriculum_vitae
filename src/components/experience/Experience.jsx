import React, { Fragment } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { arrayOf, shape, string, number } from 'prop-types';
import 'react-vertical-timeline-component/style.min.css';
import List from '../list/List';

const Experience = ({ datas }) => {
  const timelineElements = datas.map(data => (
    <VerticalTimelineElement
      key={data.id}
      className="vertical-timeline-element--work"
      date={data.date}
    >
      <h4 className="vertical-timeline-element-title">{data.position}</h4>
      <h5 className="vertical-timeline-element-subtitle">{data.company}</h5>
      <List items={data.items} />
    </VerticalTimelineElement>
  ));
  return (
    <Fragment>
      <h3>Experience</h3>
      <VerticalTimeline animate={false}>
        {timelineElements}
      </VerticalTimeline>
    </Fragment>
  );
};

Experience.propTypes = {
  datas: arrayOf(shape({
    id: number,
    position: string,
    company: string,
    items: arrayOf(string),
    date: string,
  })).isRequired,
};

export { Experience as default };
