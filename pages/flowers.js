import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Flowers() {

  const LISTURL = 'https://flowers-mock-data.firebaseio.com/flowers.json'
  const SINGLEURL = 'https://flowers-mock-data.firebaseio.com/flowers/4.json' 
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(LISTURL)
      .then((res) => res.json())
      .then((json) => setItems(json))
  }, [] )
  
  return (
    <Layout>
        <Head>
        <title>🌸</title>
      </Head>
      <h1>List🌸</h1>  
      {items.map((item) => (
        <ul>
          <h1>{item.common_name}</h1>
          <li><img src={`${item.cover_image}`} alt={item.common_name} /></li>  
        </ul>
      ))
      }
    </Layout>
  )
}