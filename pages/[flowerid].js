import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import axios from 'axios'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const FlowerDetail = () => {
  const [flower, setFlower] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
     const { flowerId } = Router.query

      try {
        const { data } = await axios.get(
          `https://flowers-mock-data.firebaseio.com/flowers/${flowerId}.json`
        )
        console.log(`blomma`, data)
        setFlower(data)

      } catch (error) {
        console.log(`Can not find id`, error)
      }
    }

    fetchData()
  }, [])

  if (!flower) return <div>Loading...</div>
  console.log('no flowers to see')

  return (
  <Layout>
    <Head>
        <title>🌸</title>
    </Head>
    <div>
      <p>Blooming season {flower.blooming_season}</p>
      <img  className={utilStyles.imgList} src={`${flower.cover_image}`} alt={flower.common_name} />
      <p>Common name {flower.common_name}</p>
      <h5>{flower.notes}</h5>
    </div>
  </Layout>
  )
}

export default FlowerDetail;