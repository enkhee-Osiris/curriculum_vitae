/**
 * @fileOverview
 * @name App.jsx
 * @author enkhee-Osiris
 */
import React, { Fragment } from 'react';
import Header from './header/Header';
import Section from './section/Section';
import Summary from './summary/Summary';
import Skill from './skill/Skill';
import Experience from './experience/Experience';
import Education from './education/Education';
import Hobby from './hobby/Hobby';
import Footer from './footer/Footer';

// Variables
const summaryItems = [
  'Full-Stack developer with 3 years of experience.',
  'Experience in Software Development including Analysis, Design, Development and Testing.',
  'Experience in Functional and Object Orieted Programming.',
  'Experience with CI/CD.',
];
const educationDatas = [
  { id: 1, description: 'B.S. in Mongolian University of Science and Technology, Ulaanbaatar (2013 - 2018)', items: ['Major in Computer Science'] },
];

const skillDatas = {
  Languages: 'Ruby, Python, Javascript, Haskell, SQL, Bash',
  Databases: 'MySQL, PostgreSQL, Microsoft Access',
  Web: 'CSS3, HTML5, jQuery, ES2015+, React, Bootstrap',
  Mobile: 'Objective-C, Swift',
  VCS: 'git',
  Platforms: 'Linux, Unix',
  'Web Services': 'REST, SOAP',
  Tools: 'Vim, Emacs',
  'Build Tools': 'Bower, WebPack, Gulp',
  'CI/CD': 'Jenkins, Travis',
};

const hobbyItems = [
  'Hand lettering',
  'Calligraphy',
  'Origami',
  'Snowboarding',
  'Cycling',
  'Wall climbing',
  'Bowling',
];

const experienceDatas = [
  {
    id: 1,
    position: 'Full-Stack Web Developer',
    company: '@eys-style, Ulaanbaatar',
    items: [
      'Built CI/CD in jenkins',
      'Imporoved TDD for Ruby on Rails app',
      'Developed custom slack bot',
      'Improved development tool using Google Script',
    ],
    date: 'April 2017 - present',
  },
  {
    id: 2,
    position: 'Full-Stack Web Developer',
    company: '@eys-style, Tokyo',
    items: [
      'Full-stack web development with Ruby on Rails',
      'Development in SpringMVC with Kotlin',
    ],
    date: 'January 2017 - April 2017',
  },
  {
    id: 3,
    position: 'Freelancing',
    company: 'Ulaanbaatar',
    items: [
      'Developed Web applications with NodeJs',
    ],
    date: 'June 2015 - January 2016',
  },
  {
    id: 4,
    position: 'Web Developer',
    company: '@zev-studio, Ulaanbaatar',
    items: [
      'Developed web pages, both frontend and backend',
      'Developed static web pages',
    ],
    date: 'January 2015 - May 2015',
  },
];

const App = () => (
  <Fragment>
    <Header />
    <Section>
      <Summary items={summaryItems} />
    </Section>
    <Section>
      <Skill datas={skillDatas} />
    </Section>
    <Section>
      <Experience datas={experienceDatas} />
    </Section>
    <Section>
      <Education datas={educationDatas} />
    </Section>
    <Section>
      <Hobby items={hobbyItems} />
    </Section>
    <Footer />
  </Fragment>
);

export { App as default };
