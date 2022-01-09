import React from 'react';
import './customButton.scss';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <div className='customButton'>
      {children}
    </div>
  )
}

export default CustomButton
