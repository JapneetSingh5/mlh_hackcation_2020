import React, { Component } from 'react';
import * as Icon from 'react-feather';

class LeftArrow extends Component {
    render() {
      return(
        <div className='backArrow' onClick={this.props.goToPrevSlide}>
        <Icon.ChevronLeft color='white' />

        </div>
      )
    }
  }
  
export default LeftArrow;