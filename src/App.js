import React from 'react';

import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import Intro from './components/Containers/Intro/Intro';

import './App.css';

const App = () => (
  <div className="app">
    <Navbar />
    <Intro />
    <Footer />
  </div>
);

export default App;
