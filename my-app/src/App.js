import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import { Grommet, Header, Button, Menu, Footer, Text, Anchor, Main, Heading, Paragraph, Avatar, Box, Grid, Nav, Tab, Tabs, Image } from 'grommet';
import { Home, UserFemale, Instagram, Twitter, Linkedin } from 'grommet-icons';



function App() {
  return (
    <div className="App">
      <Header background="#2c3e50">
        <Button  icon={<Avatar  size="5em" src="https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/69396857_519805882155745_1325905225168453632_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=MuH0ZKhrlkoAX9MAy8p&oh=5d9fb64cd8b3765172e7f5d56538c6f9&oe=5FB1D1DF" />} hoverIndicator />
        <Heading responsive="false" size="xsmall" textAlign="start" >Valentin Parlier</Heading>

        <Nav direction="row">
          <Anchor size="large" label="Accueil" href="#" />
          <Anchor size="large" label="Mon CV" href="#" />
          <Anchor size="large" label="Me contacter" href="#" />
        </Nav>

      </Header>

      <Box
        direction="row"
        border={{ color: '#2c3e50', size: 'xlarge' }}
        pad="medium"
      >
        <Box pad="medium" background="#bdc3c7">Valentin Parlier</Box>
        <Box pad="medium" background="light-3">Webmaster sur Toulouse
Passionné du Web et des nouvelles technologies depuis des années, je me présente aujourd’hui à vous en tant que Webmaster. Un métier qui me permet de mettre à profit mes compétences de développeur web, de graphiste et d’intégrateur.</Box>
      </Box>

      <Box
        direction="row"
        border={{ color: '#2c3e50', size: 'xlarge' }}
        pad="0px"
      >
      <Box
        direction="row"

        pad="0"
      >
      <Tabs height='medium' flex='grow' alignSelf='center'>
        <Tab title='Compétences'>
          <Box
          margin='small'
          pad='small'
          >
            <Text>React</Text>
            <Text>Javascript</Text>
            <Text>NodeJs</Text>
            <Text>Grommet</Text>
          </Box>
        </Tab>
        <Tab title='Exp. Pro'>
          <Box
          margin='small'
          pad='small'
          >
            <Text>Alternance Airbus</Text>
            <Text>Stage Orange</Text>
            <Text>Stage Sam depan</Text>

          </Box>
        </Tab>
        <Tab title='Formation'>
          <Box
          flex='grow'
          margin='small'
          pad='small'
          >
            <Text>Ynov Campus</Text>
            <Text>LP Pro APSIO IUT Blagnac</Text>
            <Text>BTS SNIR</Text>
            <Image src='' />
          </Box>
        </Tab>
      </Tabs>

      </Box>
      </Box>


      <Nav direction="row" background="#34495e" pad="medium">
        <Text>Me contacter</Text>
        <Anchor color="#0072b1" icon={<Linkedin />} hoverIndicator />
        <Anchor color="#1EAFDA" icon={<Instagram />} hoverIndicator />
        <Anchor color="#1DA1F2" icon={<Twitter />} hoverIndicator />
      </Nav>

      <Footer background="#2c3e50" pad="xsmall">
        <Text margin="auto">Valentin Parlier | © 2020 - Tous droits réservés</Text>
      </Footer>

    </div>
  );
}

export default App;
