import React, { lazy, Suspense } from 'react';
import './App.scss';
import registerIcons from './registerIcons';

// This registers all the icons that the app uses
registerIcons();

function App() {
  const Home = lazy(() => import('./components/Home/Home'));
  const About = lazy(() => import('./components/About/About'));

  // @TODO: Add proper fallback when the site is loading with complete styling 
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        <About />
      </Suspense>
    </div>
  );
}

export default App;
