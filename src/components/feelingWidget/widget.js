/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react';
import './styles.css';

class Feeling extends Component {
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
     
      let message = "";
      if(this.state.feeling === "yes"){
         message = <div id='feel-text'><p>Keep going, today is your day!</p></div>;
      }
      else if(this.state.feeling === "no"){
         message = <div id='feel-text'><p>Don't worry! Try out some activities that will bring you peace.</p></div>;
      }
      else {
        message =  <div id='feel-text'><p>Are you feeling calm right now?</p></div>;
      }
      return (
         <div id='wrapper'>
            <div id='feel-box'>
            {message}
               <div id='buttons'>
                  <button id='relaxed' role="button" onClick={this.yes}>Yes</button>
                  <button id='stressed' role="button" onClick={this.no}>No</button>
               </div>
            </div>
         </div>
      )
   }
}

export default Feeling
