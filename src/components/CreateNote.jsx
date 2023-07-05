import React,{useState} from 'react'
import styles from "./CreateNote.module.css"
import Note from './Note'

const CreateNote = () => {

    const[savedNotes,setSavedNotes]= useState([])

    const [note, setNote]= useState({
        title:"",
        content:""
    })
    // method 1
    const handleChange = (e) => {
        setNote({
            ...note,
            [e.target.name]:e.target.value
        })
    }

    // method 2
    // const handleChange = (e) => {
    //     setNote((prevData) => {
    //         return {...prevData, [e.target.name]:e.target.value}
    //     })
    // }

    const handleSave = () => {
        setSavedNotes([...savedNotes,note])
        setNote({
            title:"",
            content:""
        })
    }

    const isDataFilled = note.title.length === 0 || note.content.length ===0

    //delete function yaha he bna lia hy bcz hmry pass Array
    const deleteData = (id) => {
        setSavedNotes((prevData) => {
            return prevData.filter((note,index) => index !== id) 
        })
    }

  return (
    <>
    <div className={styles.container}>
    <div className={styles.mainNote}>
        <form className={styles.form}>
            <input className={styles.inputFeild} type="text" placeholder='Title' name='title' value={note.title} onChange={handleChange}/>
            <textarea className={styles.inputFeild} rows="" cols="" placeholder='Write a note...' name='content' value={note.content} onChange={handleChange}/>
        </form>
            <button onClick={handleSave} disabled={isDataFilled} >Save</button>

    </div>
    </div>
    {
        savedNotes.map((item,index) => {
            return  <Note key={index} data={item} id={index} deleteItem={deleteData}/>
        })
    }
   

    </>
  )
}

export default CreateNote