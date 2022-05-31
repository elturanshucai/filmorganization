import React, { Component, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavorites, changeInput } from '../../store/reducer/moviesReducer';
import { setDisabled } from '../../store/reducer/moviesReducer';
import List from '../List';
import './Favorites.css';

function Favorites() {
    const [active, setActive] = useState(true)
    const favorites = useSelector(state => state.moviesReducer.favorites)
    const input = useSelector(state => state.moviesReducer.listInput)
    localStorage.setItem('listTitle', input)
    const disabled = useSelector(state => state.moviesReducer.isDisabled)
    const dispatch = useDispatch()
    const clickButton = () => {
        let a = document.querySelector('.favorites a')
        a.style.display = "block"
        let button = document.querySelector('.favorites__save')
        button.style.display = 'none'
        localStorage.setItem('movies', JSON.stringify(favorites))
        setActive(!active)
        dispatch(setDisabled(disabled))
    }
    return (
        <div className="favorites">
            <input placeholder="Yeni siyahı" className="favorites__name" onChange={(e) => dispatch  (changeInput(e.target.value))} disabled={!active} />
            <ul className="favorites__list">
                {favorites.map((item) => {
                    return <li key={item.imdbID}>{item.Title} ({item.Year})
                        <button onClick={() => dispatch(deleteFavorites(item.imdbID))} disabled={!active} type='button'>X</button>
                    </li>;
                })}
            </ul>
            {
                favorites.length && input ?
                    <button type="button" className="favorites__save" onClick={clickButton}>Yadda saxla</button>
                    :
                    <button type="button" className="favorites__save" onClick={clickButton} disabled>Yadda saxla</button>
            }
            <List />
        </div>
    );
}

export default Favorites;