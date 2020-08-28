import { URL_ROOT } from '../root_url/url_root_api.js'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/flower.module.css'
import { Home } from '../components/Home'
import { ListContainer } from '../styles/Containers'

const Index = (props) => {
  
  return(
  <Layout>
    <Home />
    <ListContainer>

    <ul className={styles.list} >
      {props.flowers.map((item, id) => (
      
       <li key={item._id.oid} className={styles.listItem}>
          <Link href={`/products/[id]`} as={`/products/${id}`}>
          <a className={styles.list} aria-label={`information ${item.common_name}`}>
          <h2 className={styles.HeadingTop}>{item.common_name}</h2>
          {item.cover_image ? (
          <img src={item.cover_image} className={styles.imgBar}/>) : ( <div className={styles.undefinedDiv}><img className={styles.imgBar} src='/images/profile.jpg' aria-label='Replacement image'/><h1 className={styles.undefinedText}>Image coming soon</h1></div>)}
          </a>
          </Link>
        </li>
       ))}
   </ul>
      
    </ListContainer>
    </Layout>
  )
}

Index.getInitialProps = async function() {
  const res = await fetch(`${URL_ROOT}flowers.json`)
  const data = await res.json()

  return {
    flowers: data
  }
}

export default Index