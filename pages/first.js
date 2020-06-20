import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function First() {
  return (
    <Layout>
        <Head>
        <title>🌸</title>
      </Head>
      <h1>First Post 🌸</h1>
        <h2><Link href="/flowers"><a>to flowers</a></Link></h2>
    </Layout>
  )
}