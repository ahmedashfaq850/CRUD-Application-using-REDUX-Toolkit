import React from 'react'

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className='global-btn'>
        {children}
    </button>
  )
}

export default Button