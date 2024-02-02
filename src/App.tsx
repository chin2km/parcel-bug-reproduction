import React from 'react';
// if the path aliasing work correctly the getHelloWorld method should work!
import { getHelloWorld } from 'lodash';

export function App() {
  return <h1>{getHelloWorld()}</h1>;
}
