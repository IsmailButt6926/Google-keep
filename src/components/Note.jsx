import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import styles from "./Note.module.css"
const Note = (props) => {
  const {data,id,deleteItem} = props
  console.log("id",id)

  const handleDelete = () => {
    deleteItem(id)
  }
  return (
    <div className={styles.note}>
        <h1>{data.title}</h1>
        <p>{data.content}</p>
        <button onClick={handleDelete} className={styles.btn} >
            <AiOutlineDelete />
        </button>
    </div>
  )
}

export default Note