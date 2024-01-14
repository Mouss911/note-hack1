// import { MdEdit, MdDelete  } from "react-icons/md";
// import React, { useState, useEffect } from 'react';
import Form from "./Form";
// import EnteteNotes from "./EnteteNotes";
// import GroupeBtns from "./GroupeBtns";
import BackgroundColor from "./BackgroundColor";
// import Notes from "./Notes";
// import Button from "./Button";
import ContainerNotes from "./ContainerNotes";
import { NoteProvider, useNoteContext } from "./NoteContext";

const NotehackContent = () => {
  const {
    valueInput,
    handleChange,
    listeNote,
    isEditing,
    handleEdit,
    handleDelete,
    handleDeleteAll,
    width,
    height,
    colorBackground,
    backgroundContainer,
    handleSubmit,
    numberNote,
  } = useNoteContext();

  return (
    <div className="container-fluid pt-3 pb-5 min-vh-100" style={{ backgroundImage: colorBackground }}>
      <BackgroundColor height={height} width={width} backgroundContainer={backgroundContainer} />
      <Form type='text' value={valueInput} onChange={handleChange} onSubmit={handleSubmit} placeholder='Add note' isEditing={isEditing} />
      <ContainerNotes listeNote={listeNote} handleEdit={handleEdit} handleDelete={handleDelete} handleDeleteAll={handleDeleteAll} numberNote={numberNote} />
    </div>
  );
};

function Notehack() {
  
  // const [valueInput, setValueInput] = useState('')
  // const [listeNote, setListeNote] = useState(JSON.parse(localStorage.getItem('listeNote')) || [])
  // const [isEditing, setIsEditing] = useState(false)
  // const [noteEditingId, setNoteEditingId] = useState('')
  // const [width, setWidth] = useState('20px')
  // const [height, setHeight] = useState('20px')
  // const [colorBackground, setColorBackground] = useState(JSON.parse(localStorage.getItem('colorBackground')) || 'linear-gradient(90deg, #4dc9e6, #210cac)')
  // const numberNote = listeNote.length

  // Gérer le changement dans les champs de formulaire
  // const handleChange = (e) => {
  //   setValueInput(e.target.value);
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();  
  //   if (valueInput !== '') {
  //     let note
  //     if (isEditing) {
  //       note = listeNote.map(noteEdit => 
  //         noteEdit.id === noteEditingId ?
  //           {
  //             value : valueInput, 
  //             timestamp: new Date().toLocaleString(),
  //             isEditing : noteEditingId
  //           }
  //          : noteEdit
  //       )        
  //     }else{
  //         note =  {
  //         id : Math.floor(Math.random() * 10000),
  //         value : valueInput, 
  //         timestamp: new Date().toLocaleString(),
  //         isEditing : false
  //       }
  //       note = [...listeNote, note]
        
  //     }
  //     setListeNote(note);
  //     setIsEditing(false)
  //     setValueInput('');
  //   }else{
  //     alert("Entrez d'abord une note!")
  //   }
  // }

  // const handleEdit = (noteId) => {
  //   setIsEditing(true)
  //   const note = listeNote.find(note => noteId === note.id)
  //   setValueInput(note.value)
  //   setNoteEditingId(note.id)
  // }

  // const handleDelete = (noteId) => {
  //   const note = listeNote.filter(note => noteId !== note.id)
  //   setListeNote(note)
  // }

  // const handleDeleteAll = () => {
  //   setListeNote([])
  // }

  // const backgroundContainer = (backgroundImage,) => {
  //   setColorBackground(backgroundImage)
  //   setWidth("20px")
  //   setHeight("20px")
  // }
  
  // useEffect(() => {
  //   localStorage.setItem('listeNote', JSON.stringify(listeNote))
  //   localStorage.setItem('colorBackground', JSON.stringify(colorBackground))
  // }, [listeNote, colorBackground])


  return (
    <NoteProvider>
      <NotehackContent />
    </NoteProvider>
    
  );
}

export default Notehack;