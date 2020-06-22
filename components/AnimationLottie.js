import React from 'react'
import Lottie from 'lottie-react-web'
import animation from '../public/assets/happy-bird.json'


export const AnimationLottie = () => {
  return (
    <>
      <Lottie
        options={{
          animationData: animation,
        }}
        width='120px'
        height='120px'
        autoPlay
      />
    </>
  )
}