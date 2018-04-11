import React from 'react';
import { node } from 'prop-types';

const Section = ({ children }) => (
  <section>
    {children}
  </section>
);

Section.propTypes = {
  children: node.isRequired,
};

export { Section as default };
