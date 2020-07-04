import React from 'react'
import styled from "styled-components";
import { FcLandscape } from "react-icons/go";

import logo from "../../assets/logo-min.png";

const Brand = () => {
  return (
    <Image src={logo} alt="Company Logo" />
  )
}

export default Brand

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;
