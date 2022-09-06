import React from 'react';
import './client_button.styles.scss';

export const ClientButton = ({text}) => {
  return (
    <a data-testid='text-display' href='#²' className='button--client'>
      {text}
    </a>
  )
}
