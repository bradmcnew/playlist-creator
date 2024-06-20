import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './SearchResults.module.css';

const SearchResults = (props) => {
    return (
        <div className={styles.SearchResults}>
            <h2>Results</h2>
            <Tracklist 
              tracks={props.tracks} 
              onAdd={props.onAdd}
              onRemove={props.onRemove}
              />
        </div>
    )
}

export default SearchResults;