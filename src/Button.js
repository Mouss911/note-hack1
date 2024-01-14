import React from 'react';

const Button = ({className, onClick, icone, color}) => {
  return (
    <button className={className} onClick={onClick} style={{border: 'none', background: 'none', fontSize: '20px', color: color}}>{icone}</button>
  )
}

export default Button;
