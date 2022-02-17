import React from 'react'
import "./Hero.css"
import styled from 'styled-components'
//page de presentation

const Hero = () => {
    return (
      
       
       
               
    <Container id="hero">  
       
       <div className='monPortrais'></div>             
       <div className='overlay'>
         
           <div className='presentation'>
               <div className="social_links">
                  <div className="vert_sp1"></div>
                   <ul>
                       <li><a href="#"> <i className="fa fa-facebook"></i> </a></li>
                       <li><a href="#"> <i className="fa fa-twitter"></i> </a></li>
                       <li><a href="#"> <i className="fa fa-instagram"></i> </a></li>
                   </ul>
                   <div className="vert_sp2"></div>
               </div>

                <div className='pres_name'>
                       <h1>Hi, I am Kais Manai</h1>
                       <h2> I am passionate about creating websites</h2>
                </div>
                
           </div>
           
              

       </div>
       </Container> 

   
           
              

      

 

    
    )
}
export default Hero


const Container=styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: row;
justify-content: flex-end;




`