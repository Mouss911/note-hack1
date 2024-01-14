import React from 'react';
import EnteteNotes from './EnteteNotes';
import Notes from './Notes';
import { useNoteContext } from './NoteContext';

const ContainerNotes = () => {
  const {listeNote, handleEdit, handleDelete, handleDeleteAll, numberNote} = useNoteContext();
  return (
    <div className='container'  style={{backgroundColor: '#fff', borderRadius: '5px'}}>
        <EnteteNotes handleDeleteAll={handleDeleteAll} numberNote={numberNote} />
        <div className='row mt-4 p-4' style={{display: 'flex', justifyContent: 'center'}}>
          <Notes listeNote={listeNote} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
    </div>
  )
}

export default ContainerNotes;
