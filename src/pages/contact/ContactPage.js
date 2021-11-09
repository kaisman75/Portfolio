import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { Fade } from "react-reveal";

const ContactUs = () => {
  const form = useRef();

 
   

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7u6q7v9",
        "template_tvmlnzb",
        form.current,
        "user_6H9fgOX5bVu5dmZjeWjCm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
   <Fade bottom duration={3000} distance="60px"> 
    <Container>
    
      <form ref={form} onSubmit={sendEmail}>
        <input className="name"
          type="text"
          name="user_name"
          placeholder="Name"
        />
         <input className="phone"
          type="text"
          name="user_Phone"
          placeholder="Phone"
        />
        <input className="mail" type="email" name="user_email" placeholder="Email" />
        <label>Message</label>
        <textarea name="message" />
        <InputBtn classtype="submit" value="Send">
          Submit
        </InputBtn>
      </form>

    </Container>
    </Fade>
    
  );
};

export default ContactUs;

const Container = styled.div`
  width:50%;
  height:50vh;
  background: black;
  margin: 120px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius:10px;


  form {
    width:80%;
    height:80vh;
    color: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 40px;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  

  .name {
    background: #000;
    border: 1px;
    font-size:20px;
    border-bottom: 1px solid #fff;
    width: 80%;
    height:35px;
    color: white;
    padding:10px;
  }
  .phone{
    background: #000;
    font-size:20px;
    border: 1px;
    border-bottom: 1px solid #fff;
    width: 80%;
    height:35px;
    color: white;
    padding:10px;
  }
  .mail {
    background: #000;
    font-size:20px;
    border: 1px;
    border-bottom: 1px solid #fff;
    width: 80%;
    height:35px;
    color: white;
    padding:10px;
  }

  textarea {
    background: #000;
    font-size:20px;
    border: 1px;
    border-bottom: 1px solid #fff;
    width: 80%;
    color: white;
    height: 40%;
    opacity:0.7;
  }
`
const InputBtn = styled.button`
 width:30%;
 
 font-size:20px;  
 &:active{
     transform:scale(1.2);
 }

`
