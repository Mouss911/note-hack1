import React, { useState } from 'react';
import { MdEdit, MdDelete } from "react-icons/md";

const Notehack = () => {
    const [notes, setNotes] = useState([]);

    const [backgroundColor, setBackgroundColor] = useState("");

    const changeBackgroundColor = (color) => {
      setBackgroundColor(color);
    };

    const changeBackgroundColorWithProps = (color, buttonClass) => {
      // Faites quelque chose avec les propriétés spécifiques, si nécessaire
      console.log(`Changement de couleur vers ${color} avec le bouton de classe ${buttonClass}`);
      changeBackgroundColor(color);
    }; 

    const addNote = () => {
        const newNote = {
          title: newNoteTitle,
          timestamp: new Date().toLocaleString(),
        };
      
        setNotes((prevNotes) => [...prevNotes, newNote]);
        setNewNoteTitle("");
      };

    // const addNote = () => {
    //   if (editingIndex !== null) {
    //     // Modification de la note existante
    //     const updatedNotes = [...notes];
    //     updatedNotes[editingIndex].title = newTitle;
    //     setNewTitle(""); // Réinitialiser la valeur du champ de saisie avant la modification
    //     setNotes(updatedNotes);
    //     setEditingIndex(null);
    //   } else {
    //     // Ajout d'une nouvelle note
    //     const newNote = {
    //       title: newTitle,
    //       timestamp: new Date().toLocaleString(),
    //     };
    //     setNotes((prevNotes) => [...prevNotes, newNote]);
    //     setNewTitle("");
    //   }
    // };
    
    

    const clearAllNotes = () => {
        setNotes([]);
      };
      
    const [newNoteTitle, setNewNoteTitle] = useState("");

    // Suppression
    const removeNote = (index) => {
      const updatedNotes = [...notes];
      updatedNotes.splice(index, 1);
      setNotes(updatedNotes);
    };

    // Mise à jour
    // const [editingIndex, setEditingIndex] = useState(null);
    // const [newTitle, setNewTitle] = useState("");
    
    // const startEditing = (index) => {
    //   setEditingIndex(index);
    //   setNewTitle(notes[index].title);
    // };

       
    
    
      

  return (
    <div className={`corps ${backgroundColor}`}>
      <div className='row rounded-3 p-3 bg-white d-flex justify-content-around my-4 ligne1'>
        <div className='col'><p>NoteHack</p></div>
        <div className='col gap-3 text-end'>
          <button className='b1' onClick={() => changeBackgroundColorWithProps("#4dc9e6", 'b1')}></button>
          <button className='b2' onClick={() => changeBackgroundColorWithProps("#a9c9ff", 'b2')}></button>
          <button className='b3' onClick={() => changeBackgroundColorWithProps("#fa8bff", 'b3')}></button>
          <button className='b4' onClick={() => changeBackgroundColorWithProps("#ff512f", 'b4')}></button>
          <button className='b5' onClick={() => changeBackgroundColorWithProps("#fd8451", 'b5')}></button>
          <button className='b6' onClick={() => changeBackgroundColorWithProps("#85ffbd", 'b6')}></button>
        </div>

      </div>

      <div className='row mt-5'>
        <div className='col d-flex p-3 bg-white rounded-2'>
            <input
                placeholder='Add note'
                className="form-control me-2 border-black"
                value={newNoteTitle}
                onChange={(e) => setNewNoteTitle(e.target.value)}
            />
            <button className='btn btn-success px-3' onClick={addNote}>Add</button>
        </div>
      </div>

      <div className='row mt-5 rounded-3 bg-white mb-4'>
        <div className='col-12 mt-4 p-3 d-flex justify-content-between'>
            <p className='fw-bold'>Notes : {notes.length}</p>
            <button className='btn btn-primary' onClick={clearAllNotes}>Clear All</button>
        </div>
        <hr />

        <div className='row my-4 gy-2'>
            {notes.map((note, index) => (
            <div key={index} className='col-md-4 col-sm-12'>
                <div class='card'>
                    <div class='card-body'>
                        <div className='d-flex justify-content-between'>
                            <h5 class='card-title'>{note.title}</h5>
                            <h5>
                                <MdEdit className='text-primary mod' />
                                <MdDelete onClick={() => removeNote(index)} className='text-danger sup' />
                            </h5>
                        </div>
                        <p class='card-text'>{note.timestamp}</p>
                    </div>
                </div>
            </div>
            ))}
        </div>
        
      </div>
    </div>
  )
}

export default Notehack;
