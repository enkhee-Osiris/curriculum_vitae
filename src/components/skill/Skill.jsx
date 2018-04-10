import React, { Fragment } from 'react';
import Table from '../table/Table';

function Skill() {
  const skills = {
    'Languages': 'Ruby, Python, Javascript, Haskell, SQL, Bash',
    'Web Services': 'MySQL, PostgreSQL, Microsoft Access',
    'Web': 'CSS3, HTML5, jQuery, ES2015+, React, Bootstrap',
    'Mobile': 'Objective-C, Swift',
    'VCS': 'git',
    'Platforms': 'Linux, Unix',
    'Web Services': 'REST, SOAP',
    'Tools': 'Vim, Emacs',
    'Build Tools': 'Bower, WebPack, Gulp',
    'CI/CD': 'Jenkins, Travis'
  };
  return(
    <Fragment>
      <h3>Skills</h3>
      <Table data={skills}/>
    </Fragment>
  );
}

export default Skill;
