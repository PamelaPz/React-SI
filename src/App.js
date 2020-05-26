import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import NavBar from './components/navbar';
import Hero from './components/hero';
import Menu from './components/nav_menu';

function App() {
  return (
    <div className="App">
      <Container>
        <NavBar />
      </Container>
      <Hero />
      <Container>
        <Menu />
      </Container>
    </div>
  );
}

export default App;
