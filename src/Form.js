import React from 'react';
import { useNoteContext } from './NoteContext';

const Form = () => {

  const { placeholder, type, value, onChange, onSubmit, isEditing } = useNoteContext();

  return (
    <form className='container mt-5 py-3' style={{backgroundColor: '#fff', borderRadius: '5px'}} onSubmit={onSubmit}>
      <div className='row'>
      <div className='col d-flex p-3 bg-white rounded-2 gap-2'>
            <Input type={type} value={value} onChange={onChange} placeholder={placeholder} />
            <button className='btn btn-success px-3'>
              {isEditing ? 'Update' : 'Add'}
            </button>
          </div>
      </div>
    </form>
  )
}

const Input = ({ placeholder, type, value, onChange }) => {

    return (
            <input type={type} value={value} onChange={onChange} placeholder={placeholder} className='form-control' />
        
    )
  }

export default Form;
