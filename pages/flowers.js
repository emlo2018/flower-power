import axios from 'axios'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'

function Flowers({ error, flowers }) {
  if (error) return <p>{error.toString()}</p>
  if (flowers.length === 0) return <p>Loading...</p>

  return (
    <Layout>
    <section className={utilStyles.centerSection}>
    
      <ul>
        {flowers.map((flower, index) => (
          <li key={flower.latin_name} className={utilStyles.listItem}>
            <Link href={`/flowers/id?flower=${index}`}
                    as={`/flowers/${index}`}
                    >
              <a className={utilStyles.list}>
                <h2 className={utilStyles.headingTop}>{flower.common_name}</h2>
                <img  className={utilStyles.imgBar} src={`${flower.cover_image}`} alt={flower.common_name} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
      </section>
    </Layout>
  )
}

/* 
 Use getStaticProps if the requested data won't change and
 it will be used to construct the page layout during BUILDTIME; 
 when the project is being built for production (next build), 
 this will called ONCE and only ONCE. It will NOT be called 
 again when the project is RUNNING in production (next start).
*/
export async function getStaticProps() {
  let flowers = []
  let error = ''
  try {
    const res = await axios.get('https://flowers-mock-data.firebaseio.com/flowers.json')
    flowers = res.data
  } catch (err) {
    error = err.toString()
  }

  return {
    props: {
      error,
      flowers,
    },
  };
}

export default Flowers
