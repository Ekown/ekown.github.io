import React, { lazy, Suspense } from 'react';
import './App.scss';
import registerIcons from './registerIcons';

// This registers all the icons that the app uses
registerIcons();

function App() {
  const Home = lazy(() => import('./components/sections/Home/Home'));
  const About = lazy(() => import('./components/sections/About/About'));
  const Skills = lazy(() => import('./components/sections/Skills/Skills'));

  // @TODO: Add proper fallback when the site is loading with complete styling 
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        <About />
        <Skills />
      </Suspense> 
    </div>
  );
}

export default App;
