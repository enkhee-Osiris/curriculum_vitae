import React, { Fragment } from 'react';
import Header from './header/Header';
import Section from './section/Section';
import Summary from './summary/summary';
import Skill from './skill/Skill';
import Experience from './experience/Experience';
import Education from './education/Education';
import Hobby from './hobby/Hobby';
import Footer from './footer/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <Section>
        <Summary />
      </Section>
      <Section>
        <Skill />
      </Section>
      <Section>
        <Experience />
      </Section>
      <Section>
        <Education />
      </Section>
      <Section>
        <Hobby />
      </Section>
      <Footer />
    </Fragment>
  );
}

export default App;
