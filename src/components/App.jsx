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
import Award from './award/Award';
import Hobby from './hobby/Hobby';
import Footer from './footer/Footer';

// Variables
const summaryItems = [
  'Full-Stack developer with 3 years of experience.',
  'Mobile App developer with react-native experience.',
  'Experience in Software Development including Analysis, Design, Development and Testing.',
  'Experience in Functional and Object Orieted Programming.',
  'Experience with CI/CD.',
];
const educationDatas = [
  { id: 1, description: 'B.S. in Mongolian University of Science and Technology, Ulaanbaatar (2013 - 2018)', items: ['Major in Computer Science'] },
];

const skillDatas = {
  Languages: 'Ruby, Python, JavaScript, Objective-C, Swift, SQL, Bash',
  Frameworks: 'Ruby On Rails, React Native',
  Databases: 'MySQL, PostgreSQL',
  Web: 'CSS3, SASS, LESS, HTML5, React, jQuery, ES2015+',
  VCS: 'git',
  Platforms: 'Linux, Unix',
  Editors: 'Vim, Emacs, VSCode',
  'Build Tools': 'WebPack, Gulp',
  'CI/CD': 'Jenkins, Travis',
};

const awardItems = [
  '2018: First place in The HaruulZangi CTF Competition',
];

const hobbyItems = [
  'Hand lettering',
  'Calligraphy',
  'Security Capture The Flag Competition',
  'Film Photography',
  'Collect Vinyl Records',
  'Cycling',
  'Origami',
  'Snowboarding',
  'Bowling',
];

const experienceDatas = [
  {
    id: 1,
    position: 'Front-end Developer',
    company: '@ANDSystems, Ulaanbaatar',
    items: [
      'Working on React based web apps',
      'Working on Design System for React and React Native both',
      'Working on LendMN app',
    ],
    date: 'May 2019 - present',
  },
  {
    id: 2,
    position: 'Mobile App Developer',
    company: '@ANDSystems, Ulaanbaatar',
    items: [
      'Working on LendMN app',
    ],
    date: 'October 2018 - May 2019',
  },
  {
    id: 3,
    position: 'Web Developer',
    company: '@nomadays, Ulaanbaatar',
    items: [
      'Transfered Angular web app to React',
      'Learned about the React',
    ],
    date: 'July 2018 - October 2018',
  },
  {
    id: 4,
    position: 'Full-Stack Web Developer',
    company: '@eys-style, Ulaanbaatar',
    items: [
      'Built CI/CD in jenkins',
      'Imporoved TDD for Ruby on Rails app',
      'Developed custom slack bot',
      'Improved development tool using Google Script',
    ],
    date: 'April 2017 - July 2018',
  },
  {
    id: 5,
    position: 'Full-Stack Web Developer',
    company: '@eys-style, Tokyo',
    items: [
      'Full-stack web development with Ruby on Rails',
      'Development in SpringMVC with Kotlin',
    ],
    date: 'January 2017 - April 2017',
  },
  {
    id: 6,
    position: 'Freelancing',
    company: 'Ulaanbaatar',
    items: [
      'Developed Web applications with NodeJs',
    ],
    date: 'June 2015 - January 2016',
  },
  {
    id: 7,
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
      <Award items={awardItems} />
    </Section>
    <Section>
      <Hobby items={hobbyItems} />
    </Section>
    <Footer />
  </Fragment>
);

export { App as default };
