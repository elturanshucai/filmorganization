import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import {setFavorite} from "../../store/reducer/moviesReducer"
import './MovieItem.css';

const MovieItem= (Props)=>{
    const disabled=useSelector(state=>state.moviesReducer.isDisabled)
    const dispatch = useDispatch()
    const { Title, Year, Poster } = Props
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={()=>dispatch(setFavorite(Props))} disabled={disabled} >Добавить в список</button>
                </div>
            </article>
        );
    
}
 
export default MovieItem;