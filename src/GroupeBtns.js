import React from 'react';
import { useNoteContext } from './NoteContext';

const GroupeBtns = () => {
  const { backgroundImage, onClick, height, width } = useNoteContext();
  return (
    <button
      onClick={onClick}
      style={{ border: 'none', width: width, height: height, borderRadius: '50%', marginLeft: '7px', backgroundImage: backgroundImage }}
    ></button>
  )
}

export default GroupeBtns;
