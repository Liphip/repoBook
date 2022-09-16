import React, { FC } from 'react';
import logo from './logo.svg';
import './index.css';
import Home from './view/screens/Home';

const App: FC<{}> = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
