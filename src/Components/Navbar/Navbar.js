import React, { useState } from 'react';
import './Navbar.css';
import { CgUserlane } from "react-icons/cg";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { IconContext } from 'react-icons/lib';

export default function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const clickHandler = () => {
        return setClick(!click)
    }

    // cmm => closeMobileMenu
    const cmm = () => {setClick(false)}

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className='navbar'>
                    <div className='navbar-container container'>
                        <Link to='/' className='navbar-logo' onClick={cmm}>
                            <CgUserlane />
                            aNONe
                        </Link>
                        <div className='menu-icon' onClick={clickHandler}> { click ? <FaTimes/> : <FaBars/> } </div>
                        <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={cmm}>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/about' className='nav-links' onClick={cmm}>About</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/product' className='nav-links' onClick={cmm}>Product</Link>
                            </li>
                            <li className='nav-btn'>
                                {button ? (
                                    <Link to='/sign-up' className='btn-link'>
                                        <Button buttonStyle='btn--outline'>SIGN-UP</Button>
                                    </Link>
                                ) : (
                                    <Link to='/sign-up' className='btn-link'>
                                        <Button buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={cmm}>SIGN-UP</Button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    )
}