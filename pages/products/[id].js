import { useState } from 'react'
import { URL_ROOT } from '../../root_url/url_root_api.js'
//import fetch from 'isomorphic-unfetch' This is not used, test and remove
import Layout from '../../components/layout'
import styles from '../../styles/flower.module.css'
import swal from 'sweetalert'
import moment from 'moment'


const Detail = (props) => {
  
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([...props.comments].reverse())
 
  const postComment = async (event) => {
    event.preventDefault()
    fetch(`${URL_ROOT}comments/emlo2018/${props.id}.json`,
      {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({comment})
      }
    )
    .then(() => {
      setComments((previousComments) => [comment, ...previousComments])
      setComment('')
      })
      swal({
        text: 'Your comment was added!',
        icon: 'success',
      })
        .catch((err) => {
      console.log(`${err} This is a problem from Detail`)
    })
  }

  const handleDelete = (banana) => {
    const toRemove = banana
    const index = comments.indexOf(toRemove);
    if (index > -1) { 
      comments.splice(index, 1);
    }
    event.preventDefault()
    fetch(`${URL_ROOT}comments/emlo2018/${props.id}.json`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({banana})
      }
    )
    .then(() => {
      setComments((previousComments) => [...previousComments])
      })
      swal({
        text: 'Your comment is now removed!',
        icon: 'info',
      })
        .catch((err) => {
      console.log(err)
    })
  }

  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.cardContainer}>
          <section className={styles.card}>
          <p><strong>{props.flower.common_name}</strong>
            <br></br>Blooming season {props.flower.blooming_season}.
            <br></br>Notes: {props.flower.notes}.
            <br></br><i>Latin: </i>{props.flower.latin_name}.
          </p>
          </section>
        
          <div className={styles.imageContainer}>
          {props.flower.cover_image ? ( <img className={styles.imageCard} src={props.flower.cover_image} />) : ( <div className={styles.undefinedDiv}><img className={styles.undefinedImg} src='/images/profile.jpg' /> <h1 className={styles.undefinedText} >Image coming soon</h1> </div>)}
          </div>
        </div>

        <div className={styles.formContainer}>
          <form
            className={styles.form}
            onSubmit={postComment}>
            <input
              className={styles.input}
              id='comment'
              type='text'
              value={comment}
              placeholder='Write your comment here...'
              required
              onChange={(event) => setComment(event.target.value)}
            />
            <button className={styles.button}>Post comment</button>
        </form>

          <h2 className={styles.subtitle}>Comments</h2> 
          <ul className={styles.commentsList}>
              {comments.map((banana, id) => (
                <li key={id} className={styles.commentContainer}>
                  <p className={styles.comment}><i>{banana}</i>{" "}</p>
                  <p className={styles.moment}>{moment().format("MMM Do YYYY")}</p>
                  <button className={styles.deleteBtn} onClick={() => handleDelete(banana)}>delete</button>
                </li>
              ))}
          </ul> 
        </div>

      </main>
    </Layout>
  )
}

Detail.getInitialProps = async function(context) { //getInitialProps is an async function that can be added to any page as a static method. Runs on server
  const { id } = context.query

  const [flower, comments] = await Promise.all([
    fetch(`${URL_ROOT}flowers/${id}.json`)
      .then((res) => res.json()),
    fetch(`${URL_ROOT}comments/emlo2018/${id}.json`)
      .then((res) => res.json())
      .then((json) =>
        json ? Object.entries(json).map(([object]) => object.comment) : []
      ) 
  ])
  return { flower, comments, id }
}

export default Detail