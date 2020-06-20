import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Flowers() {
  return (
    <Layout>
        <Head>
        <title>🌸</title>
      </Head>
      <h1>List🌸</h1>
      <h2><Link href="/first"><a>to first</a></Link></h2>
    </Layout>
  )
}