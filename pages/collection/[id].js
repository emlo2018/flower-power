import { useState } from 'react'
import { URL_ROOT } from '../../root_url/url_root_api.js'
import fetch from 'isomorphic-unfetch'

import Layout from '../../components/layout'
import styles from '../../styles/flower.module.css'

import swal from 'sweetalert'
import moment from "moment"


const Detail = (props) => {
  
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([...props.comments].reverse())
 
  const postComment = async (event) => {
    event.preventDefault()
    fetch(URL_ROOT+`comments/emlo2018/${props.id}.json`,
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
      setComment("")
      })
      swal({
        text: "Your comment was added! ",
        icon: "success",
      })
        .catch((err) => {
      console.log(err)
    })
  }

  const handleDelete = (comment) => {
    const newArray = [props.comments]
    const toRemove = comment
    const index = comments.indexOf(toRemove);
    if (index > -1) { 
      comments.splice(index, 1);
    }
    event.preventDefault()
    fetch(URL_ROOT+`comments/emlo2018/${props.id}.json`,
      {
        method: 'PUT',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({comment})
      }
    )
    .then(() => {
      setComments((previousComments) => [...previousComments])
      })
      swal({
        text: "Your comment is removed!",
        icon: "success",
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
          {props.flower.cover_image ? ( <img className={styles.imageCard} src={props.flower.cover_image} />) : ( <img className={styles.imageCard} src='/images/profile.jpg' /> )}
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
            
              {comments.map((comment, id) => (
                <li key={id} className={styles.commentContainer}>
                  <p className={styles.comment}><i>{comment}</i>{" "}</p>
                  <p className={styles.moment}>{moment().format("MMM Do YYYY")}</p>
                  <button className={styles.deleteButton} onClick={() => handleDelete(comment)}>delete</button>
                </li>
              ))}
          </ul> 
        </div>

      </main>
    </Layout>
  )
}

Detail.getInitialProps = async function(context) {
  const { id } = context.query

  const [flower, comments] = await Promise.all([
    fetch(URL_ROOT+`flowers/${id}.json`)
      .then((res) => res.json()),
    fetch(URL_ROOT+`comments/emlo2018/${id}.json`)
      .then((res) => res.json())
      .then((json) =>
        json ? Object.entries(json).map(([id, object]) => object.comment) : [],
      )
  ])
  return { flower, comments, id }
}

export default Detail