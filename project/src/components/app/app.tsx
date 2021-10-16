import React from 'react';
import Main from '../main/main';

type typeAppProps = {
  countsRent: number;
}

function App({countsRent}: typeAppProps): JSX.Element {
  return <Main countsRent = {countsRent}/>;
}

export default App;
