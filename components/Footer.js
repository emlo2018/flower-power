import React from 'react'
import Router from 'next/router'

import styled from 'styled-components'

export const Container = styled.div`
box-sizing: content-box;
height: 200px;
padding: 10px;
text-align: center;
background-color:#1d1c1a;
`

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 0.5rem;
`

export const Link = styled.a`
  color: white;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  :hover {
    color: #6F7073;
  }
`

export const Text = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: white;
  :hover {
    color: #6F7073;
  }
`

export const Button = styled.button`
  margin-top: 6rem;
  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  background: #eee;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  color: white;
  letter-spacing: 1px;
}
  :before {
    content: '';
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(242,187,167,1) 100%);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
  }
  :active {
    color: #000
  }
  :active:after {
    background: transparent;
  }
  :hover:before {
    opacity: 1;
    border: black;
  }
  :after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ababab;
    left: 0;
    top: 0;
    border-radius: 10px;
}
@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
`

export const Footer = () => {

  return (
    <Container>
      <LinkWrapper>
        <Link onClick={() => Router.push("/")}>Home</Link>
        <Link onClick={() => Router.push("/about")}>about</Link>
      </LinkWrapper>
      <Button>
        <Text  href="https://github.com/emlo2018" target="_blank"> @2020</Text>
      </Button>
    </Container>)
}

export default Footer