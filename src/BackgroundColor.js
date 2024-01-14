import React from 'react';
import GroupeBtns from './GroupeBtns';
import { useNoteContext } from './NoteContext';

const BackgroundColor = () => {

  const {backgroundContainer, height, width} = useNoteContext();

  return (
    <div className='container mb-5' style={{backgroundColor: '#fff', borderRadius: '5px'}} >
      <div className='row rounded-3 p-3 bg-white d-flex justify-content-between my-4'>
          <div className='col'>
            <p>NoteHack</p>
          </div>
          <div className='col text-end' >
            <GroupeBtns width={width} height={height} backgroundImage='linear-gradient(90deg, #4dc9e6, #210cac)' onClick={() => backgroundContainer('linear-gradient(90deg, #4dc9e6, #210cac)')} />
            <GroupeBtns width={width} height={height} backgroundImage='linear-gradient(180deg, #a9c9ff, #ffbbec)' onClick={() => backgroundContainer('linear-gradient(180deg, #a9c9ff, #ffbbec)')} />
            <GroupeBtns width={width} height={height} backgroundImage='linear-gradient(45deg, #fa8bff, #2bd2ff 52%, #2bff88 90%)' onClick={() => backgroundContainer('linear-gradient(45deg, #fa8bff, #2bd2ff 52%, #2bff88 90%)')} />
            <GroupeBtns width={width} height={height} backgroundImage='linear-gradient(to bottom right, #ff512f, #dd2476)' onClick={() => backgroundContainer('linear-gradient(to bottom right, #ff512f, #dd2476)')} />
            <GroupeBtns width={width} height={height} backgroundImage='linear-gradient(to bottom right, #fd8451, #ffbd6f)' onClick={() => backgroundContainer('linear-gradient(to bottom right, #fd8451, #ffbd6f)')} />
            <GroupeBtns width={width} height={height} backgroundImage='linear-gradient(45deg, #85ffbd, #fffb7d)' onClick={() => backgroundContainer('linear-gradient(45deg, #85ffbd, #fffb7d)')} />
          </div>
      </div>
    </div>
  )
}

export default BackgroundColor;
