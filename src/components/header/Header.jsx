import React from 'react';
import logo from './image.png';

const Header = () => (
  <header>
    <img src={logo} alt="logo" width="200px" />
    <h2>Enkh-Erdene Bolormaa</h2>
    <h3>Full-Stack Web Developer</h3>
  </header>
);

export { Header as default };
