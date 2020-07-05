import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Container, Row, Col } from 'react-grid';

import Navbar from "./components/navbar/Navbar";
import { Header } from "./components/activities/Header";
import { CardList, MultiList } from "./components/activities/CardList";
import Footer from './components/footer/footer';
import InspiQuoteBox from './components/inspiQuote/quoteBox';
import Feeling from './components/feelingWidget/widget';
import Breathe from './components/breathe/widget';
import Dash from './components/dashboard/dash';
import Tasks from './components/tasks/widget';
import './App.css';

import GlobalStyle from './styles/Global';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
      <Router>
      <Navbar 
      navbarState={this.state.navbarOpen} 
      handleNavbar={this.handleNavbar}
    />
        <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/foryou">
              <ForYou navbarOpen={this.state.navbarOpen} handleNavbar={this.handleNavbar} />
            </Route>
            <Route exact path="/explore">
              <Explore />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Redirect to="/home" />
        </Switch>
      </Router>
      <GlobalStyle />
      </>
    )
  }
}

export default App;

function ForYou(){
  return(
    <div>
        <div className="container">
          <Header />
          <br />
          <h1>Activities For You</h1>
          <CardList />
          <h1>Do It Together : Multiplayer Activities</h1>
          <MultiList />
          <Footer />
        </div>
        </div>
  );
}


function Home() {
  return <h2 style={{"marginTop": 100}}>Landing page</h2>;
}

function Explore() {
  return <h2 style={{"marginTop": 100}}>Explore Page</h2>;
}

function Dashboard() {
  return (<div className="container" >
          <Header />
          <Container>
        <Row>
        <Col xs={12} sm={12} md={6}>
          <Dash />
          <Tasks />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <InspiQuoteBox />
          <Breathe />
          <Feeling />
          </Col>
          </Row>
          </Container>
          <Footer />
          </div>);
}


