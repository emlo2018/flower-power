import { URL_ROOT } from '../root_url/url_root_api.js'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/flower.module.css'
import { Homepage } from '../components/Homepage'
import { ListContainer } from '../styles/Containers'

const Index = (props) => {
  
  return(
  <Layout>
    <Homepage />
    <ListContainer>

      <ul className={styles.list}>
      {props.flowers.map((flower, id) => (
       <li key={flower.latin_name} className={styles.listItem}>
                 <Link href={`/collection/[id]`} as={`/collection/${id}`}>
                  <a 
                  className={styles.list}
                  aria-label={`info about ${flower.common_name}`}>
                 <h2>{flower.common_name}</h2>
                 {flower.cover_image ? (
              <img src={flower.cover_image} className={styles.imgBar}/>
            ) : (
                <img src="/images/profile.jpg" 
                className={styles.imgBar}/>
              )}
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
  const res = await fetch(URL_ROOT+`flowers.json`)
  const data = await res.json()

  return {
    flowers: data
  }
}

export default Index