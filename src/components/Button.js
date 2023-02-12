import React from 'react';
import './Button.scss';

const Button = ({ children, onClick, styles, disabled }) => {
  return (
    <button
      id='c-custom-cta'
      style={styles}
      type='button'
      onClick={onClick}
      disabled={disabled}
    >
        {children}
    </button>
  );
};

export default Button;
