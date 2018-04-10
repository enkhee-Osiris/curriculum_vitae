import React, { Fragment } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import List from '../list/List';

function Experience() {
  return (
    <Fragment>
      <h3>Experience</h3>
      <VerticalTimeline animate={false}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2017 - present"
        >
          <h4 className="vertical-timeline-element-title">Full-Stack Web Developer</h4>
          <h5 className="vertical-timeline-element-subtitle">@eys-style, Ulaanbaatar</h5>
          <List items={[
            'Built CI/CD in jenkins',
            'Imporoved TDD for Ruby on Rails app',
            'Developed custom slack bot',
            'Improved development tool using Google Script',
          ]}
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2017 - April 2017"
        >
          <h4 className="vertical-timeline-element-title">Full-Stack Web Developer</h4>
          <h5 className="vertical-timeline-element-subtitle">@eys-style, Tokyo</h5>
          <List items={[
            'Full-stack web development with Ruby on Rails',
            'Development in SpringMVC with Kotlin',
          ]}
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2015 - January 2016"
        >
          <h4 className="vertical-timeline-element-title">Freelancing</h4>
          <h5 className="vertical-timeline-element-subtitle">Ulaanbaatar</h5>
          <List items={[
            'Developed Web applications with NodeJs',
          ]}
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2015 - May 2015"
        >
          <h4 className="vertical-timeline-element-title">Web Developer</h4>
          <h5 className="vertical-timeline-element-subtitle">@zev-studio, Ulaanbaatar</h5>
          <List items={[
            'Developed web pages, both frontend and backend',
            'Developed static web pages',
          ]}
          />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Fragment>
  );
}

export default Experience;
