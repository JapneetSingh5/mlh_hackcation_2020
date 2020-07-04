import React, { Component } from 'react'
import Navbar from "./components/navbar/Navbar";
import { Header } from "./components/activities/Header";
import { CardList } from "./components/activities/CardList";
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
          <CardList />
        </div>
        <GlobalStyle />
      </>
    )
  }
}

export default App
