import React, { createContext, useContext, useState, useEffect } from 'react';

// Créez le contexte
const NoteContext = createContext();

// Créez un composant fournisseur pour envelopper votre application
const NoteProvider = ({ children }) => {
  const [valueInput, setValueInput] = useState('');
  const [listeNote, setListeNote] = useState(JSON.parse(localStorage.getItem('listeNote')) || []);
  const [isEditing, setIsEditing] = useState(false);
  const [noteEditingId, setNoteEditingId] = useState('');
  const [width, setWidth] = useState('20px');
  const [height, setHeight] = useState('20px');
  const [colorBackground, setColorBackground] = useState(JSON.parse(localStorage.getItem('colorBackground')) || 'linear-gradient(90deg, #4dc9e6, #210cac)');

  const numberNote = listeNote.length;

  const handleChange = (e) => {
    setValueInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();  
    if (valueInput !== '') {
      let note
      if (isEditing) {
        note = listeNote.map(noteEdit => 
          noteEdit.id === noteEditingId ?
            {
              value : valueInput, 
              timestamp: new Date().toLocaleString(),
              isEditing : noteEditingId
            }
           : noteEdit
        )        
      }else{
          note =  {
          id : Math.floor(Math.random() * 10000),
          value : valueInput, 
          timestamp: new Date().toLocaleString(),
          isEditing : false
        }
        note = [...listeNote, note]
        
      }
      setListeNote(note);
      setIsEditing(false)
      setValueInput('');
    }else{
      alert("Entrez d'abord une note!")
    }
  }

  const handleEdit = (noteId) => {
    setIsEditing(true)
    const note = listeNote.find(note => noteId === note.id)
    setValueInput(note.value)
    setNoteEditingId(note.id)
  }

  const handleDelete = (noteId) => {
    const note = listeNote.filter(note => noteId !== note.id)
    setListeNote(note)
  }

  const handleDeleteAll = () => {
    setListeNote([])
  }

  const backgroundContainer = (backgroundImage,) => {
    setColorBackground(backgroundImage)
    setWidth("20px")
    setHeight("20px")
  }
  
  useEffect(() => {
    localStorage.setItem('listeNote', JSON.stringify(listeNote))
    localStorage.setItem('colorBackground', JSON.stringify(colorBackground))
  }, [listeNote, colorBackground])

  // ... Ajoutez d'autres fonctions de gestion de l'état ici ...

  // Encapsulez les valeurs et fonctions dans le contexte
  const contextValue = {
    valueInput,
    setValueInput,
    listeNote,
    setListeNote,
    isEditing,
    setIsEditing,
    noteEditingId,
    setNoteEditingId,
    width,
    setWidth,
    height,
    setHeight,
    colorBackground,
    setColorBackground,
    numberNote,
    handleChange,
    handleEdit,
    handleDelete,
    handleDeleteAll,
    backgroundContainer,
    handleSubmit,
    // ... Ajoutez d'autres fonctions à inclure dans le contexte ici ...
  };

  return <NoteContext.Provider value={contextValue}>{children}</NoteContext.Provider>;
};

// Créez un hook personnalisé pour utiliser le contexte
const useNoteContext = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("useNoteContext doit être utilisé à l'intérieur de NoteProvider");
  }
  return context;
};

export { NoteProvider, useNoteContext };
