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
          <li>{item.common_name}</li>
        </ul>
      ))
      }
    </Layout>
  )
}