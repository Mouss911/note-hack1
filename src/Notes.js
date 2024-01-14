import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import Button from './Button';
import { useNoteContext } from './NoteContext';

const Notes = () => {
  const {listeNote, handleEdit, handleDelete} = useNoteContext();
  return (
    listeNote.map((note)=>(
        <div className='col-md-4 gy-3 col-sm-12' key={note.id}>
            <div className="card" style={{ borderLeft: "5px solid blue", borderRadius: "10px" }}>
                <div className="card-body">
                  <div className='d-flex justify-content-between'>
                    <h5 className='card-title'>{note.value}</h5>
                    <h5>
                      <Button className='' onClick={() => handleEdit(note.id)} icone={<MdEdit />} color='blue' />
                      <Button className='border-btn' onClick={() => handleDelete(note.id)} icone={<MdDelete />} color='red' />
                    </h5>
                  </div>
                  <p className='card-text'> {note.timestamp}</p>
                </div>
            </div>
        </div>
      ))
  )
}

export default Notes;
