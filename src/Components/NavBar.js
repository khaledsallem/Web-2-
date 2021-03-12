import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo'

const NavBar = () => {
    return (
        <div className='navbar'>
            <Logo />
            <NavLink exact to='/' activeClassName="active" >Accueil</NavLink>
            <NavLink exact to='a-propos' activeClassName="active" >A propos</NavLink>
        </div>
    );
};

export default NavBar;