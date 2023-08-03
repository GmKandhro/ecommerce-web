import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 60vh;
  background-color: #fcf5fd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`
const Description = styled.p`
font-size: 24px;
 margin-bottom: 20px;
 font-weight: 300;

`
const InputContainer = styled.div`
width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  border: 1px solid lightgray;
`
const Input = styled.input`
border: none;
flex: 8;
padding: 0 10px;
outline: 0;
`
const Button = styled.button`
background-color: teal;
color: white;
border: none;
flex: 1;
cursor: pointer;
`

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timly update from  your favorite product</Description>
      <InputContainer>
      <Input placeholder='Your email'/>
      <Button>
        <Send/>
      </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter
