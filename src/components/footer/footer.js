import * as React from "react";
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; 

import logo from "../../assets/logo-min.svg";

function PageFooter (){
    return(
        <Footer
        columns={[
          {
            items: [
                {
                  title: 'About',
                  url: 'https://pro.ant.design/',
                  description: 'About us',
                },
                {
                  title: 'Contact',
                  url: 'https://mobile.ant.design/',
                  description: 'Contact us',
                },
                {
                  title: 'Home',
                  url: 'https://kitchen.alipay.com/',
                  description: 'Your Dashboard',
                },
              ],
          },
          {
            icon: (
              <img src={logo} alt="logo" />
            ),
            title: "Team 404",
          },
        ]}
        bottom="Made with ❤️ "
      />
    );
}

export default PageFooter;
  
