/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import './styles.css';

class Dash extends Component {
   constructor(props) {
      super(props)
      this.state = {
         dashing: ""
      }
   }
  

   render() {
     
      return (
         <div id='wrapper'>
            <div id='dash-box'>
            <img src='images/profile.png' alt="Profile Image" className="profile-img" />
            Jonathon Doer   <br></br>
            <small>India</small>
            <h5 style={{opacity: 0.6, marginTop: 10}}>Recent Activities</h5>
            <h6>15min Yoga</h6>
            <h6>Book Reading Session</h6>
            <h6>Speed Cubing</h6>
            <h5 style={{opacity: 0.6, marginTop: 10}}>Recent Collaborations</h5>
            <h6>15min Yoga</h6>
            <h6>Weekend Aerobics</h6>
            <h6 style={{ marginBottom: 10}}>Jog Along</h6>
            <button id='more' className='button'><h2>Learn More</h2></button>
            </div>
         </div>
      )
   }
}

export default Dash
