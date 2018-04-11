import React from 'react';

const Footer = () => (
  <footer style={{ textAlign: 'center', fontSize: '1.7rem', marginBottom: '3rem' }}>
    Crafted with
    <span style={{ color: '#fa1414' }}> ♥ </span>
    by&nbsp;
    <a
      href="http://github.com/enkhee-Osiris"
      style={{
        textDecoration: 'none',
        color: '#fa1414',
      }}
    >
      Osiris
    </a>
    .
  </footer>
);

export { Footer as default };
