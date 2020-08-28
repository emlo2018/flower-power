import React from "react"
import { AnimationLottie } from '../components/AnimationLottie'
import styled from 'styled-components'

// Home COMPONENT
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #eee;
`

export const BackgroundImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 300px;
  @media (min-width: 668px) {
    height: 600px;
  }
`
 
export const Middle = styled.div`
  position: absolute;
  width: 100%;
  top: 15%;
  text-align: center; 
  @media (min-width: 668px) {
    top: 40%;
  }
  `

export const WelcomeMessage = styled.h1`
  margin: 0 auto;
  margin-bottom: 2rem;
  width: 80%;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  color: #fafafafa;
  padding: 2rem;
  letter-spacing: 1px;
  font-weight: 900;
  position: relative;
  @media (min-width: 668px) {
    width: 80%;
    font-size: 40px;
    padding: 3rem;
  }
`

export const Link = styled.button`
  border: none;
  margin-left: 1rem;
  width: 5.5rem;
  color: #F2F2F2;
  font-size: 15px;
  background: none;
  letter-spacing: 0.5px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  :hover{
    color: white;
    font-size: 18px;
  }
  @media (min-width: 600px) {
    width: 6rem;
    font-size: 17px;
    letter-spacing: 1px;
  }
`

export const Navbar = styled.div`
  position: absolute;
  top: 5%;
  margin-top: -5px;
  text-align: right;
  right: 1rem;
  width: 100%;
  @media (min-width: 600px) {
    right: 3rem;
  }
`

export const Home = () => {

  return (
    <>
    <div>
    <BackgroundImage src='https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' />
      <Middle>
      <AnimationLottie/>
      <WelcomeMessage>Flower Power 
      </WelcomeMessage>
      </Middle>
    </div>
      
      
      </>
  )
}

export default Home