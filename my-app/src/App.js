import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import { Grommet, Header, Button, Menu, Footer, Text, Anchor, Main, Heading, Paragraph, Avatar, Box, Grid, Nav, Tab,
   Tabs, Image, Table, TableCell, TableRow, TableHeader, TableBody, Card, CardBody,CardFooter,
   List
 } from 'grommet';
import { Home, UserFemale, Instagram, Twitter, Linkedin, Wifi, System, User, Task, Location, ShieldSecurity, Tasks, More, HostMaintenance, Action, Send } from 'grommet-icons';



const data = [
  {
    color: 'blue',
    icon: <Send size="large" />,
    title: 'Airbus',
    subTitle: 'Développeur',
    message: 'Alternance',
  },
  {
    color: 'red',
    icon: <HostMaintenance size="large" />,
    title: 'Pmetique45',
    subTitle: 'Technicien réseaux',
    message: 'Stage',
  },
  {
    color: 'orange',
    icon: <Action size="large" />,
    title: 'Orange',
    subTitle: 'Technicien réseaux',
    message: 'Stage',
  },
];

const theme = {
  global: {
    font: {
      family: `-apple-system,
         BlinkMacSystemFont,
         "Segoe UI"`,
    },
    colors: {
      blue: '#00C8FF',
      green: '#17EBA0',
      teal: '#82FFF2',
      purple: '#F740FF',
      red: '#FC6161',
      orange: '#FFBC44',
      yellow: '#FFEB59',
    },
  },
  card: {
    footer: {
      pad: { horizontal: 'medium', vertical: 'small' },
      background: '#FFFFFF27',
    },
  },
};

const Identifier = ({ children, title, subTitle, size, ...rest }) => (
  <Box gap="small" align="center" {...rest}>
    {children}
    <Box>
      <Text size={size} weight="bold">
        {title}
      </Text>
      <Text size={size}>{subTitle}</Text>
    </Box>
  </Box>
);


function App() {
  return (
    <div className="App">
      <MyHeader/>
      <Description/>
      <Box background="#2c3e50" pad="small"><Heading textAlign="start">Compétences</Heading></Box>
      <Skills/>
      <Box  background="#2c3e50" pad="small"><Heading textAlign="start">Experiences professionnelles</Heading></Box>
      <ProExp/>
      <Box  background="#2c3e50" pad="small"><Heading textAlign="start">Formations</Heading></Box>
      <Formations/>
      <ContactMe/>
      <MyFooter/>
    </div>
  );
}

function MyHeader() {
  return(
    <Header background="#2c3e50">
      <Button  icon={<Avatar  size="5em" src="https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/69396857_519805882155745_1325905225168453632_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=MuH0ZKhrlkoAX9MAy8p&oh=5d9fb64cd8b3765172e7f5d56538c6f9&oe=5FB1D1DF" />} hoverIndicator />
      <Heading responsive="false" size="xsmall" textAlign="start" >Valentin Parlier</Heading>

      <Nav direction="row">
        <Anchor color="#2980b9" size="large" label="Accueil" href="#" />
        <Anchor color="#2980b9" size="large" label="Mon CV" href="#" />
        <Anchor color="#2980b9" size="large" label="Me contacter" href="#" />
      </Nav>

    </Header>
  )
}

function Description() {
  return(
    <Box
      direction="row"
      border={{ color: '#2c3e50', size: 'xlarge' }}
      pad="medium"
    >
      <Box pad="medium" background="#bdc3c7">Valentin Parlier</Box>
      <Box pad="medium" background="light-3">Webmaster sur Toulouse
Passionné du Web et des nouvelles technologies depuis des années, je me présente aujourd’hui à vous en tant que Webmaster. Un métier qui me permet de mettre à profit mes compétences de développeur web, de graphiste et d’intégrateur.</Box>
    </Box>
  )
}


function Skills() {
  return(
        <Box
        pad='small'
        textAlign="center"
        direction='row'
        background="#bdc3c7"
        >
        <Card pad="small" gap="medium" background="#00C8FF" margin="1em">
          <CardBody>Programmation / Dev Web</CardBody>
          <Box>
            <List
            primaryKey="name"
            secondaryKey="percent"
            data={[
              { name: 'HTML/CSS', percent: '20%' },
              { name: 'React', percent: '30%' },
              { name: 'Java', percent: 40 },
              { name: 'Python', percent: 80 },
            ]}
            />
          </Box>
        </Card>
        <Card pad="small" gap="medium" background="#FC6161" margin="1em">
          <CardBody>Réseau</CardBody>
          <Box>
            <List
            primaryKey="name"
            secondaryKey="percent"
            data={[
              { name: 'Configuration d\'un réseau IPV4 et IPV6' },
              { name: 'Mise en place de VLAN' },
              { name: 'Installation de serveur' },
              { name: 'Supervision de serveurs' },
            ]}
            />
          </Box>
        </Card>
        <Card pad="small" gap="medium" background="#FFBC44" margin="1em">
          <CardBody>Gestion de projet</CardBody>
          <Box>
            <List
            primaryKey="name"
            secondaryKey="percent"
            data={[
              { name: 'Méthode agile Scrum' },
              { name: 'Diagrammes UML' },
              { name: 'Merise (MCD)' },
            ]}
            />
          </Box>
        </Card>

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
    </Box>
  )
}

export const ProExp = () => (
  <Grommet theme={theme}>
    <Box pad="large" background="#bdc3c7">
      {/* Responsive Grid */}
      <Grid gap="medium" rows="small" columns={{ count: 'fit', size: 'small' }}>
        {data.map(value => (
          <Card background={value.color} key={value.message}>
            <CardBody pad="small">
              <Identifier
                pad="small"
                title={value.title}
                subTitle={value.subTitle}
                size="small"
                align="start"
              >
                {value.icon}
              </Identifier>
            </CardBody>
            <CardFooter pad={{ horizontal: 'medium', vertical: 'small' }}>
              <Text size="xsmall">{value.message}</Text>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </Box>
  </Grommet>
);

function Formations() {
  return(
            <Box
            pad='small'
            textAlign="center"
            direction='row'
            background="#bdc3c7"
            >
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

        </Box>
  )
}

function ContactMe(){
  return(
    <Nav direction="row" background="#34495e" pad="medium">
      <Text>Me contacter</Text>
      <Anchor color="#0072b1" icon={<Linkedin />} hoverIndicator />
      <Anchor color="#1EAFDA" icon={<Instagram />} hoverIndicator />
      <Anchor color="#1DA1F2" icon={<Twitter />} hoverIndicator />
    </Nav>
  )
}

function MyFooter() {
  return(
    <Footer background="#2c3e50" pad="xsmall">
      <Text margin="auto">Valentin Parlier | © 2020 - Tous droits réservés</Text>
    </Footer>
  )
}

export default App;
