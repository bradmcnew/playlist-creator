import React, {useState} from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

const Tracklist = ({tracks}) => {
    return (
        <div className={styles.tracklist}>
            {tracks.map(track => {
                return (<Track key={track.id} track={track} />)
            })}
        </div>
    )
}

export default Tracklist;