import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import './ListPage.css';

function ListPage() {
    const title = useSelector(state=>state.moviesReducer.listInput)
    const favorites_list = useSelector(state=>state.moviesReducer.favorites)
    const link= "https://www.imdb.com/title/"
    const localFavs = JSON.parse(localStorage.getItem('movies'))
    const listTitle = localStorage.getItem('listTitle')
    if(localFavs.length>0){
        return (
            <div className="list-page">
                <h1 className="list-page__title">{listTitle}</h1>
                <ul>
                    {localFavs.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={link + item.imdbID} target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
    return (
        <div className="list-page">
            <h1 className="list-page__title">{title}</h1>
            <ul>
                {favorites_list.map((item) => {
                    return (
                        <li key={item.imdbID}>
                            <a href={link + item.imdbID} target="_blank">{item.Title} ({item.Year})</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ListPage;