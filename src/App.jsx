import React from 'react';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Group from './components/Group';
import More from './components/More';

function App() {
  return (

    <div className="App">
      {/*
    <Loader
         type="rings"
         color="red"
         height={100}
         width={100}
         timeout={2000} //3 secs
          display={false}
        / > */}
      <Navigation />
      <ScrollUpButton id="scroll-btn" style={{ backgroundColor: 'transparent' }} ToggledStyle={{ right: 30 }} />
      <Home />
      <About />
      <Skills />
      {/* <Experience />
      <Group />
      <More /> */}
      {/* <Contact/>       */}

    </div>

  );
}

export default App;
