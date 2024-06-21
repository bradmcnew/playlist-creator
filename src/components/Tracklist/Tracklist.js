import React, {useState} from 'react';
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

const Tracklist = (props) => {
    return (
        <div className={styles.tracklist}>
            {props.tracks.map(track => {
                return (<Track 
                            key={track.id} 
                            track={track} 
                            onAdd={props.onAdd}
                            onRemove={props.onRemove}
                            context={props.context}
                            playlist={props.playlist}
                            />)
            })}
        </div>
    )
}

export default Tracklist;