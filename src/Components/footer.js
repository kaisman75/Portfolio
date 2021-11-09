import React from 'react'
import styled from 'styled-components'
import {Link} from  'react-router-dom'
import SocialMedia from "./socialMedia/SocialMedia";
import Fade from 'react-reveal/Fade';

function Footer() {
    return (
 
        <Container>
         
            <Coordonnee>
            <Fade left duration={3000} distance="60px">
              <p> Address: 8 Rue des Accacias bellvue tunis ,TUNISIA</p>
              <br/>
              <p>Tel Number: 216 20 33 65 33</p>
              <br/>
              <p>Email: kaismanai1975@gmail.com</p>
             </Fade>
            </Coordonnee>
            
            <SitePages>
            <Fade bottom duration={3000} distance="60px">
            <li >
            <Link to="/" > 
            <a >Home </a>
            </Link>
          
          
          <Link to="/About" >
            <a> About me </a>
          </Link>
      
          
          <Link to="/porfolio" >
              <a >Portfolio</a>
              </Link>
      
      
              <Link to="/contact" >
              <a >Contact me</a>
              </Link>
            </li>
            </Fade>
            </SitePages>
            <MediaSocials>
            <Fade right duration={3000} distance="60px">
                <SocialMedia/>
                </Fade>
             </MediaSocials>
         
        </Container>
  
    )
}

export default Footer

const Container=styled.div`
width:100%;
height:20vh;
border-top:1px solid black;
display: flex;
justify-content: space-around;
align-items: center;
padding: 20px;
flex-direction: row;

`
const Coordonnee=styled.div`
text-align:left;
 p{
   margin:0;
   font-size:20px;
   font-family:'Roboto'; 
}

`
const SitePages=styled.div`
 li{
     display:flex;
     flex-direction: column;
     align-items: flex-start;
     margin:0;
     font-size:20px; 
     font-family:'Roboto';
 }
 li a{
     text-decoration:none;
     color:black;
 }
 
`
const MediaSocials=styled.div`
margin:0;
font-size:20px; 


`
