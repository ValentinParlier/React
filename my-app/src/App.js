import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import { Grommet, Header, Button, Menu, Footer, Text, Anchor, Main, Heading, Paragraph, Avatar, Box, Grid } from 'grommet';
import { Home, UserFemale } from 'grommet-icons';



function App() {
  return (
    <div className="App">
      <Header background="#2c3e50">
        <Button margin="0,1em" icon={<Avatar src="https://pbs.twimg.com/profile_images/554072268004147200/Fuos0cpV.jpeg" />} hoverIndicator />
        <Heading size="xsmall" textAlign="end" >Valentin Parlier</Heading>
        <Menu label="Menu" items={[{ label: 'Mon CV', href: 'https://www.google.com' }, {label: 'Me contacter'}, {label: 'Me faire un don <3'}]} />
      </Header>



      <Grid
        rows={['xxsmall', 'medium', 'xsmall']}
        columns={['1/4', '2,999999/4']}
        areas={[
          ['header', 'header'],
          ['sidebar', 'main'],
          ['footer', 'footer'],
        ]}
        gap="small"
      >
        <Box background="brand" gridArea="header">
          Hello
        </Box>

        <Box background="light-5" gridArea="sidebar">
          Sidebar
        </Box>

        <Box background="light-2" gridArea="main">
          Main
          <Paragraph>Tu te trouves actuellement sur mon site CV. C'est ici que tu pourra retrouver quelques-uns de mes projets ainsi qu'une description de mon parcours professionnel.</Paragraph>

        </Box>

        <Box background="dark-2" gridArea="footer">
          Footer
        </Box>
      </Grid>

      <Footer background="#2c3e50" pad="medium">
        <Text>Copyright Valou</Text>
        <Anchor label="About" />
      </Footer>

    </div>
  );
}

export default App;
