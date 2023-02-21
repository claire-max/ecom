import React from 'react';
import styled from "styled-components";

const Container = styled.div`
height: 30px;
background-color: pink;
color:white;
align-items:center;
justify-content:center;
display:flex;
font-size:14px;
font-weight: 500;

`

const Announcement = () => {
  return (
    <Container>
      Free shipping on Orders over $50!
    </Container>
  )
}

export default Announcement
