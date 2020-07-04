import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import { Header } from "./components/activities/Header";
import { CardList, MultiList } from "./components/activities/CardList";
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
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <div className="container">
          <Header />
          <br />
          <h1>Activities For You</h1>
          <CardList />
          <h1>Do It Together : Multiplayer Activities</h1>
          <MultiList />
        </div>
        <GlobalStyle />
      </>
    )
  }
}

export default App
