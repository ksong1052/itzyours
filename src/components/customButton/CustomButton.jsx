import React from 'react';
import './customButton.scss';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className='customButton'>
      {children}
    </button>
  )
}

export default CustomButton
