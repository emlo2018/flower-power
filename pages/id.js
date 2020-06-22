import axios from 'axios'
import Link from 'next/link'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

function Flower({ error, flower }) {
  if (error) return <p>{error.toString()}</p>
  if (flower.length === 0) return <p>Loading...</p>

  return (
      <Layout>
         <div>
           <p>Blooming season {flower.blooming_season}</p>
           <img className={utilStyles.imgList} src={`${flower.cover_image}`} alt={flower.common_name} />
           <p>Common name {flower.common_name}</p>
           <h5>{flower.notes}</h5>
         </div>
       <Link href="/">
        <a>
          <h2>Go Home</h2>
        </a>
       </Link>
      </Layout>
  )
}

/* 
 Use getServerSideProps if the requested data needs to change
 the page layout during RUNTIME -- when the project is running 
 in production (next start), this will be called every time this 
 page is loaded.
*/
export async function getServerSideProps({ query }) {
  let flower = [];
  let error = "";
  try {
    const res = await axios.get(
      `https://flowers-mock-data.firebaseio.com/flowers/${query.id}`
    );
    flower = res.data;
  } catch (err) {
    error = err.toString();
  }

  return {
    props: {
      error,
      flower,
    },
  };
}

export default Flower;
