import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMovies } from '../../store/reducer/moviesReducer';
import './SearchBox.css';

function SearchBox () {
    const dispatch= useDispatch()
    const [searchLine, setSearchLine] = useState('')
    const searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value)
    }
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }
    const handleClick=()=>{
        fetch(`https://www.omdbapi.com/?apikey=cfdcf37f&s=${searchLine}`)
        .then(res=>res.json())
        .then(data=>{
            if(data?.Search?.length){
                dispatch(setMovies(data.Search))
            }
        })
    }

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Film axtar:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Məsələn, Shawshank Redemption"
                            onChange={searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                        onClick={handleClick}
                    >
                        Axtar
                    </button>
                </form>
            </div>
        );
    
}
 
export default SearchBox;