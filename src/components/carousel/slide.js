import React, { Component } from 'react';
import landingData from './data';
import one from '../../assets/1.svg';
import two from '../../assets/2.svg';
import three from '../../assets/3.svg';
import four from '../../assets/4.svg';


class Slide extends Component {
    constructor(props) {
      super(props);
      this.state = {landing: landingData};
    }render() {
      return(
        <section >
        {
          this.state.landing.map((s, index) =>
            <div className={
              index === this.props.activeIndex ? 'active' : 'slide'}
              key={index}
              style={{width: '100%'}}
              >
                <h1 style={{fontSize:60, color: 'rgb(208,104,61)', marginTop: 10}}>{s.title}</h1>
                <p style={{zIndex: 10000, maxWidth: '80vw', color:"white", padding: 10}}>{s.description}</p>
                {(() => {
                    switch (s.id) {
                      case 1:
                        return <img src={one} alt="Landing" style={{zIndex: 10000, maxHeight: '60vh', maxWidth: '80vw'}} />;
                      case 2:
                        return <img src={two} alt="Landing" style={{zIndex: 10000, maxWidth: '80vw'}}/>;
                      case 3:
                        return <img src={three} alt="Landing" style={{zIndex: 10000, maxWidth: '80vw'}}/>;
                      case 4:
                        return <img src={four} alt="Landing" style={{zIndex: 10000, maxWidth: '80vw'}}/>;
                    default:
                        return null;
                    }
                  })()}
            </div>
          ) }
          </section>
      )
    }
  }export default Slide;