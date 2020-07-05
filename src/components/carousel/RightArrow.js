import React, { Component } from 'react';
import * as Icon from 'react-feather';

class RightArrow extends Component {
    render() {
      return(
        <div className='backArrow' onClick={this.props.goToNextSlide}>
        <Icon.ChevronRight color='white' />
        </div>
      )
    }
  }
  
export default RightArrow;