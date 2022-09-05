import React from 'react';
//styles
import './index.scss';
//assets
import search from '../../assets/search.svg';
import ing from '../../assets/ing-light.png'
import { ClientButton } from './Client_button';

export const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul className='nav'>
          <li>
            <a href="#" title="ING, Banque le ligne" className='logo'>
              <img src={ing} alt="page d'accueil ING" />
            </a> 
          </li>
          <li className='ing_search'>
            <a href="#">
              <img src={search} alt="search logo" />
            </a>
          </li>
          <li className='projects'>
            <a href="#">
              Vos projets
            </a>
          </li>
          <li className='help'>
            <a href="#">
              Besoin d'aide?
            </a>
          </li>
          <li className='client'>
            <ClientButton text='Espace client' />
          </li>
        </ul>
      </nav>
    </header>
  )
}
