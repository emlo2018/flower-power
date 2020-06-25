import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import { Footer } from './Footer'

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flower Power 🌼</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      
      <div className={styles.header}>
       <Link href="/"><a className={styles.navBar} title="home">Home</a></Link>
       <Link href="/about"><a className={styles.navBar}  title="about">About</a></Link>
      </div>
      {props.children}
      <Footer />
    </div>

  )
}