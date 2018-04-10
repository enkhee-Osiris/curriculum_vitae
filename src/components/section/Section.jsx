import React from 'react';
import { node } from 'prop-types';

function Section(props) {
  return (
    <section>
      {props.children}
    </section>
  );
}

Section.propTypes = {
  children: node.isRequired,
};

export default Section;
