import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import { Grommet, Header, Button, Menu } from 'grommet';
import { withStyles } from '@material-ui/core/styles';


function App() {
  return (
    <div className="App">
    <Header background="brand">
  <Button icon={<Icons.Home />} hoverIndicator />
  <Menu label="account" items={[{ label: 'logout' }]} />
</Header>

    </div>
  );
}

export default App;
