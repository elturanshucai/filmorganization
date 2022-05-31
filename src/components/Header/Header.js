import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPopUp } from '../../store/reducer/moviesReducer';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1 className="header__title">
                MustSee
            </h1>
        </header>
    );
}

export default Header;