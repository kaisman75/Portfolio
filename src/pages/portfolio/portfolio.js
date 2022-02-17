import React from 'react'
import styled from 'styled-components'
import Jump from 'react-reveal/Jump';
function Portfolio() {
    return (
      
            <Container id="portfolio">
                <Jump>
                            <Wrap>
                                <img src="/images/kais.jpg" alt="" />
                                <ProjectTitle>
                                <h1> my project</h1>
                                </ProjectTitle>
                            </Wrap>
                            <Wrap>
                                <img src="/images/kais.jpg" alt="" />
                                <ProjectTitle>
                                <h1> my project</h1>
                                </ProjectTitle>
                            </Wrap>
                            <Wrap>
                                <img src="/images/kais.jpg" alt="" />
                                <ProjectTitle>
                                   <h1> my project</h1>
                                </ProjectTitle>
                            </Wrap>
                            <Wrap>
                                <img src="/images/kais.jpg" alt="" />
                                <ProjectTitle>
                                <h1> my project</h1>
                                </ProjectTitle>
                            </Wrap>
                            <Wrap>
                                <img src="/images/kais.jpg" alt="" />
                                <ProjectTitle>
                                <h1> my project</h1>
                                </ProjectTitle>
                            </Wrap>
              </Jump>
            </Container>
        )
    
    
}

export default Portfolio


 const Container=styled.div`
 width:100vw;
 height:100vh;
 margin:20px auto;
 padding:20px;
 display : grid;
 grid-gap:25px;
 grid-template-columns: repeat(4 ,minmax(0, 1fr));
 `
 const Wrap=styled.div`
 
 border:3px solid #000;
 border-radius:10px;
 cursor:pointer;
 box-shadow: rgb(0 15 0 /69%) 0px 26px 30px -10px;
  object-fit:cover;
}
 img{
     width:100%;
    
     border-radius:10px;
    
     &:hover{
        transform:scale(1.2);
       }
 }
 
 `
 const ProjectTitle=styled.div`
 
 `