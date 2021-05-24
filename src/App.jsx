import { useEffect } from 'react';

import { Header, List, MultiList, Table, ExperienceList, Footer } from '@/components';

const today = new Date();
const currentYear = today.getFullYear();

const SUMMERIES = [
  `Front-End developer with ${currentYear - 2017} years of experience.`,
  'Experience with modern technologies.',
  'Experience with CI/CD.',
];

const SKILLS = {
  Languages: 'JavaScript, Python',
  Databases: 'MySQL, PostgreSQL',
  'Libs and Frameworks': 'React, React Native, NextJS, ExpressJS, Ruby on Rails',
  'Tools and Platforms': 'Docker, Webpack, Babel',
  VCS: 'git',
  Editors: 'Vim, Emacs',
};

const EDUCATIONS = [
  {
    id: '8ed7bf4c-60f8-4cb0-994f-4a94fe0436f2',
    description:
      'B.S. in Mongolian University of Science and Technology, Ulaanbaatar (2013 - 2018)',
    items: ['Major in Computer Science'],
  },
];

const AWARDS = [
  '2018: First place in The HaruulZangi CTF Competition',
  '2019: First place in The HaruulZangi CTF Competition',
  '2020: First place in The Water Mine Hackathon',
];

const EXPERIENCES = [
  {
    id: 'fefd12a6-6590-40b7-b520-0fa5a48edbac',
    position: 'Front-End Developer',
    company: '@ANDSystems Tech',
    items: [
      'Worked on multiple mobile apps (react-native)',
      'Developed multiple web apps using ReactJS',
      'Developed admin dashboard using NextJS',
      'Developed pdf table scraper cli using nodejs',
      'Developed multiple slack bots',
      'Developed react-native app builder for CI/CD',
    ],
    dates: 'May 2019 - present',
    location: 'Ulaanbaatar, Mongolia',
  },
  {
    id: '76606df7-0e85-49d6-a2bc-5e7677557d7c',
    position: 'Mobile App Developer',
    company: '@ANDSystems',
    items: [
      'Worked on LendMN app',
      'Developed multiple react-native libraries',
      'Improved code of conduct',
    ],
    dates: 'October 2018 - May 2019',
    location: 'Ulaanbaatar, Mongolia',
  },
  {
    id: '3b1da13f-7cc0-4a5b-92ef-5e8d1f709e51',
    position: 'Front-End Developer',
    company: '@nomadays',
    items: ['Migrated Angular app to ReactJS'],
    dates: 'July 2018 - October 2018',
    location: 'Ulaanbaatar, Mongolia',
  },
  {
    id: '59133f75-fe1e-4724-8ae9-8cb42213cf68',
    position: 'Full-Stack Developer',
    company: '@eys-style',
    items: [
      'Improved tests',
      'Developed custom slack bot',
      'Improved development tool using Google Script',
    ],
    dates: 'April 2017 - July 2018',
    location: 'Ulaanbaatar, Mongolia',
  },
  {
    id: '4f8cf0e1-64a8-4b32-bd3b-850652de518e',
    position: 'Full-Stack Developer',
    company: '@eys-style',
    items: ['Web development using Ruby on Rails'],
    dates: 'January 2017 - April 2017',
    location: 'Tokyo, Japan',
  },
];

function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }
  }, []);

  return (
    <>
      <Header />

      <main className="my-10 sm:my-20 space-y-10 sm:space-y-16">
        <section>
          <h3 className="text-lg sm:text-3xl font-thin dark:font-light dark:text-gray-300 mb-6">
            Summary
          </h3>
          <List items={SUMMERIES} />
        </section>

        <section>
          <h3 className="text-lg sm:text-3xl font-thin dark:font-light dark:text-gray-300 mb-6">
            Skills
          </h3>
          <div className="overflow-x-auto">
            <Table data={SKILLS} />
          </div>
        </section>

        <section>
          <h3 className="text-lg sm:text-3xl font-thin dark:font-light dark:text-gray-300 mb-6">
            Experiences
          </h3>
          <ExperienceList data={EXPERIENCES} />
        </section>

        <section>
          <h3 className="text-lg sm:text-3xl font-thin dark:font-light dark:text-gray-300 mb-6">
            Educations
          </h3>
          <MultiList data={EDUCATIONS} />
        </section>

        <section>
          <h3 className="text-lg sm:text-3xl font-thin dark:font-light dark:text-gray-300 mb-6">
            Honors and Awards
          </h3>
          <List items={AWARDS} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
