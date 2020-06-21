import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function Flowers() {
  const LISTURL = 'https://flowers-mock-data.firebaseio.com/flowers.json'
  const TESTURL = 'https://flowers-mock-data.firebaseio.com/flowers/9.json' 
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
      <section className={utilStyles.centerSection}>
      <button>Shade loving plants</button>
      <button>Sun loving plants</button>
      </section>
      {items.map((item) => (
        <ul key={item._id.oid}>
          <li className={utilStyles.listItem}>
          <Link href='/flowers/[flowerid]' as={`/flowers/${item._id.oid}`}>

            <a className={utilStyles.list}>
              <h2 className={utilStyles.headingTop}>{item.common_name}</h2>
             <img  className={utilStyles.imgList} src={`${item.cover_image}`} alt={item.common_name} />
            </a>
           </Link> 
          </li>  
        </ul>
      ))
      }
    </Layout>
  )
}