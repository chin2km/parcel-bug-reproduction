import React from 'react';

const LazyComponentA = React.lazy(() => import('./components/ComponentA').then(module => ({ default: module.ComponentA })));

export function App() {
  return (
    <React.Suspense fallback="LOADING A">
      <h1>Hello World: FFF</h1>
      <LazyComponentA />
    </React.Suspense>
  )
}
