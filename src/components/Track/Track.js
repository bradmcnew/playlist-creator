import React from "react";
import styles from "./Track.module.css";

const Track = (props) => {
    const handleAdd = () => {
        props.onAdd(props.track);
        
    }
    const handleRemove = () => {
        props.onRemove(props.track);
    }
    let button;
    let added;
    if (props.context === "playlist") {
        button = <button className={styles.playlist}></button>;
        added = true;
    } else {
        const isInPlaylist = props.playlist.some(savedTrack => savedTrack.id === props.track.id);
        if (isInPlaylist) {
            button = <button className={`${styles.remove} ${styles.blue}`} onClick={handleRemove}>-</button>;
            added = true;
        } else {
            button = <button className={styles.remove} onClick={handleAdd}>+</button>;
            added = false;
        }
    }
    return (
        <div className={added ? `${styles.track} ${styles.added}` : styles.track} >
            <div className={styles.card}>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {button}
        </div>
    );
}

export default Track;