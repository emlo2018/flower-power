import styled, { keyframes } from 'styled-components'

export const ListContainer = styled.div`
width: 90%;
display: flex;
text-align: center; 
flex-direction: column;
flex-wrap: wrap;
`
export const HeadingTop = styled.h2`
position: absolute;
color: #fafafa;
z-index: 10;
font-size: 12px;
left: 2.2em;
@media (min-width: 668px) { 
  margin-top: 4em;
  margin-bottom: 15em;
  padding-bottom: 10em;
  font-size: 20px; 
 } 
`
export const MovingBackground = keyframes`
0%{background-position:0% 50%}
25%{background-position:100% 50%}
100%{background-position:0% 50%}
}
`

export const AnimationButton = styled.button `
background-image: linear-gradient(270deg, #647DEE,#7F53AC);
animation: ${MovingBackground} 5s ease infinite;
width: 4rem;
height: 1.5rem;
`