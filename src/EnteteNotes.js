import React from 'react'
import { useNoteContext } from './NoteContext';

const EnteteNotes = () => {
  const { handleDeleteAll, numberNote } = useNoteContext();
  return (
    <div className='row mt-5 pt-4'>
        <div className="col-12 p-3 d-flex justify-content-between">
          <div className="d-flex">
            <h5>Notes : </h5>
            <div className='ms-2 d-flex justify-content-center fw-bold' style={{ backgroundColor: '#e5e5e5', width: '20px', height: '25px', borderRadius: '50%' }}>{numberNote}</div>
          </div>
          <button onClick={() => handleDeleteAll()} className='btn btn-primary'>Clear All</button>
        </div>
        <hr />
    </div>
  )
}

export default EnteteNotes;
