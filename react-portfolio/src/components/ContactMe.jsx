import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn, fadeInLeft, fadeInRight } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;

const FadeInDiv = styled.div`
  animation: 3s ${fadeInAnimation};
`;
const FadeInLeftDiv = styled.div`
  animation: 2s ${fadeInLeftAnimation};
`;
const FadeInRightDiv = styled.div`
  animation: 2s ${fadeInRightAnimation};
`;

class ContactMe extends React.Component{
  constructor(props) {
  super(props);
}
render(){

  const contactStyle = {
    border: 'solid',
    borderRadius: '5px',
    borderColor: '#424242',
    padding: '10px',
    backgroundColor: '#303030',
    textAlign: 'center',
    marginLeft: '450px',
    marginRight: '450px',
    marginTop: '20px'
  };
  const contactGrid={
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  };
  const contactBox ={
    border: 'solid',
    borderRadius: '5px',
    borderColor: '#424242',
    padding: '10px',
    backgroundColor: '#303030',
    textAlign: 'center',
    marginTop: '20px',
    margin: '60px',
    marginLeft: '150px',
    marginRight: '150px',
  };
  const linkText={
    color: 'white',
  };
  return (
    <div>
      <FadeInDiv style={contactStyle}>
        <h1>Contact Me</h1>
      </FadeInDiv>
      <div style={contactGrid}>
        <FadeInLeftDiv style={contactBox}>
          <h2>Social Media</h2>
          <p>LinkedIn: <a style={linkText} href="https://www.linkedin.com/in/mrdanielkbennett/">https://www.linkedin.com/in/mrdanielkbennett/</a></p>
          <p>Twiter: <a style={linkText} href="https://twitter.com/mrdanielbennett">https://twitter.com/mrdanielbennett</a></p>
          <p>Instagram: <a style={linkText} href="https://www.instagram.com/danielkbennett/">https://www.instagram.com/danielkbennett/</a></p>
        </FadeInLeftDiv>
        <FadeInRightDiv style={contactBox}>
          <h2>Projects and Email</h2>
          <p>GitHub: <a style={linkText} href="https://github.com/MrDanielBennett">https://github.com/MrDanielBennett</a></p>
          <p>Email Me: <a style={linkText} href="daniel.bennett1999@gmail.com">daniel.bennett1999@gmail.com</a></p>
        </FadeInRightDiv>
      </div>
    </div>
    );
  }
  }

  export default ContactMe;
