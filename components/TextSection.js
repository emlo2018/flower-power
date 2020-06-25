import React from 'react'
import styled, { keyframes } from 'styled-components'

export const BigContainer = styled.div`
margin: auto;
width: 100%;
padding: 10px;
text-align: center;
 @media (min-width: 900px) {
  width: 60%;
  }
`
export const MovingBackground = keyframes`
0%{background-position:0% 50%}
50%{background-position:100% 50%}
100%{background-position:0% 50%}
}
`
export const Container = styled.div`
margin: auto;
width: 100%;
text-align: center;
background-image: linear-gradient(270deg, #647DEE,#7F53AC);
animation: ${MovingBackground} 15s ease infinite;
color: white;
text-align: center;
font-size: 1.2em;
text-transform: uppercase;
  @media (min-width: 900px) {
   width: 90%;
  }
`

export const TextIntro = styled.h2`
  padding: 80px; 
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  border-bottom: solid 1px #A6A6A6 ;
`

export const TextSection = () => {
  return (
    <Container>
      <TextIntro>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
      </TextIntro>
    </Container>)
}

export default TextSection