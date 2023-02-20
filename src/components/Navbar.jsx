import React from 'react'
import styled from 'styled-components'
import {BsSearch} from 'react-icons/bs';

const Container = styled.div`
height: 60px;
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items:center;
`

//Left Nav 
const Left = styled.div`
flex:1; 
display:flex;
align-items:center;
`

const Language = styled.div`
 font-size: 14px;
 cursor: pointer;
`
const SearchContainer = styled.div`
 border: 1px solid lightblue;
 display:flex;
 align-items:center;
 margin-left: 25px;
 padding: 5px;
`
const Input = styled.input`
 border:none;
`
//Center Nav

const Center = styled.div`
flex:1; 
text-align:center;
`

const Logo = styled.h1`
font-weight:bold;
`


//Right Nav 
const Right = styled.div`
flex:1; 
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
            <Language>ENjrkj</Language>
            <SearchContainer>
                <Input/>
                <BsSearch/>
            </SearchContainer>
          </Left>
          <Center><Logo>JUNEBEE</Logo></Center>
          <Right>Right</Right>
        </Wrapper>

    </Container>
  )
}

export default Navbar
