import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <>
        <div className='header'>
            <div className='image-dark'></div>
            <img src="./images/header.jpg" alt='header-image' className='w-100' />
        </div>
    </>
  )
}