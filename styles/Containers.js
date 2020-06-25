import styled from 'styled-components'

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
@media (min-width: 668px) and (max-width: 1023px) { 
  margin-top: 4em;
  margin-bottom: 15em;
  padding-bottom: 10em;
 } 
 @media (min-width: 1024px) {
 } 
`