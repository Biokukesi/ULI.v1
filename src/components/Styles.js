import styled from 'styled-components';

import background from './../assets/matt-ragland-02z1I7gv4ao-unsplash.jpg';

import { Link } from "react-router-dom";

export const colors = {
  primary: "#fff",
  theme: "#BE185D",
  light1: "#F3F4F6",
  light2: "#E5E7EB",
  dark1: "#1F2937",
  dark2: "#4B5563",
  dark3: "#9CA3AF",
  red: "#DC2626"
}


export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
  background-size: cover;
  background-attachment: fixed;


`;

export const StyledTitle = styled.h2`
 font-size: ${(props) => props.size}px;
 text-align: center;
 color: ${(props) => props.color ? props.color : colors.primary};
 padding: 5px;
 margin-bottom: 20px;
`;

export const StyledSubTitle = styled.p`
font-size: ${(props) => props.size}px;
 text-align: center;
 color: ${(props) => props.color ? props.color : colors.primary};
 padding: 5px;
 margin-bottom: 25px;
`;

export const Avatar = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;



background-image: url(${props => props.image});
background-size: cover;
background-position: center;
margin: auto;
`;


export const StyledButton = styled(Link)`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 3px solid ${colors.primary};
  border-radius: 25px;
  color: ${colors.primary};
  text-decoration: none;
  text-align: center;
  transition: ease-in-out 0.3s;
  outline: 0px;

  &:hover{
      background-color: ${colors.primary};
      color: ${colors.theme};
      cursor: pointer;
  }


`;


export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 25px;
`;
// Forms
export const StyledTextInput = styled.input`
  width: 280px;
  padding: 15px;
  padding-left: 50px;
  font-size: 17px;
  letter-spacing: 1px;
  color: ${colors.light2};
  background-color: ${colors.light2}
  border: 0;
  outline: 0;
  display: block;
  margin: 5px auto 10px auto;
  transition: ease-in-out 0.3s;
   
  ${(props) => props.invalid && `background-color: ${colors.red}; color: ${colors.primary};`}

   &:focus {
     background-color: ${colors.dark2};
     color: ${colors.primary};
   }  

`;

export const StyledLabel = styled.p`
  text-align: left;
  font-size: 13px;
  font-weight: bold;

`;

export const StyledFormArea = styled.div`
  background-color: ${props => props.bg || colors.light1};
  text-align: center;
  padding: 40px 50px;
  border-radius: 5%;
`;

export const StyledFormButton = styled.button`
padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 2px solid ${colors.theme};
  border-radius: 25px;
  color: ${colors.theme};
  text-align: center;
  transition: ease-in-out 0.3s;
  outline: 0px;

  &:hover{
      background-color: ${colors.red};
      color: ${colors.dark1};
      cursor: pointer;
  }


`;

export const TextLink = styled(Link)`
text-decoration: none;
color: ${colors.theme};
transition: ease-in-out 0.3s;

&:hover{
  text-decoration: underline;
  letter-spacing: 2px;
  font-weight:bold;
}

`;
// Error messages
export const ErrorMsg = styled.div`
   font-size: 11px;
   color: ${colors.red};
   margin-top: -5px;
   margin-bottom: 10px;
   text-align: left;


`;

export const ExtraText = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.dark2)}
  padding: 2px;
  margin-top: 10px;

`



// icons
export const StyledIcon = styled.p`
   color: ${colors.dark1};
   position: absolute;
   font-size: 21px;
   top: 35px;
   left: 10px;
   ${(props) => props.right && `right: 15px;`};
   ${(props) => props.right && `left: 15px;`}
`;
export const StyledIcon1 = styled.p`
   color: ${colors.dark1};
   position: absolute;
   font-size: 21px;
   top: 35px;
   left: 240px;
   ${(props) => props.right && `right: 15px;`};
   ${(props) => props.right && `left: 15px;`}
`;

// Copyright text

export const CopyrightText = styled.p`
 padding: 5px;

 text-align: center;
 color: ${colors.light2};
`