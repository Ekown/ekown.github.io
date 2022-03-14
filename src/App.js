import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faB } from '@fortawesome/free-solid-svg-icons';
import React, { lazy, Suspense } from 'react';
import './App.scss';

const arUsedIcons = [
  faArrowRight,
];

library.add(faB, ...arUsedIcons);

function App() {
  const Home = lazy(() => import('./components/Home/Home'));

  // @TODO: Add proper fallback when the site is loading with complete styling 
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
