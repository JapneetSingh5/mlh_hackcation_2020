/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react';
import './styles.css';

class Breathe extends Component {
   constructor(props) {
      super(props)
      this.state = {
         feeling: ""
      }
   }
   yes = () => {
      this.setState({
         feeling: "yes"
      })
   };
   no = () => {
      this.setState({
         feeling: "no"
      })
   }

   render() {
     
      return (
         <div id='wrapper'>
            <div id='breathe-box'>
            <br></br>
            <h3 style={{color: "white"}}>Breathe.</h3>
            <p style={{color:"white", fontSize:16}}>Breathing helps your body relax. Breathe in as the sphere gets bigger, and breathe out as it shrinks. Doing this consciously for a minute a day helps you stay at peace.</p>

            <div id="five-sec-loop"></div>
            </div>
         </div>
      )
   }
}

export default Breathe;
