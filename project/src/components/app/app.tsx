import React from 'react';
import Main from '../main/main';

type TAppProps = {
  countsRent: number;
}

function App({countsRent}: TAppProps): JSX.Element {
  return <Main countsRent={countsRent}/>;
}

export default App;
