import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

const SearchResults = (props) => {
    return (
        <div className={style.SearchResults}>
            <h2>Results</h2>
            <Tracklist tracks={props.tracks} onAdd={props.onAdd}></Tracklist>
        </div>
    )
}