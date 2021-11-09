import React from "react";
import Hero from "../../Components/hero/Hero";
import styled from "styled-components";

const Home = () => {
  return (
     <Container>
         <Hero />
    </Container>
  );
};

export default Home;

const Container=styled.div`
overflow: "hidden";
width:100%;
height:70%;
position:relative;
`