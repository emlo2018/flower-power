import React from 'react'
import { AnimationLottie } from '../components/AnimationLottie'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <h2 {...utilStyles.heading2Xl}>
         <Link href="/flowers"><a>to the flowers</a></Link>
        </h2> 
        <Head>
         <title>{siteTitle}</title>
        </Head>    
      </section>
      <AnimationLottie/>
      <img src="https://images.unsplash.com/photo-1475872711536-95ec04b9d290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"></img>
    </Layout>
  )
}