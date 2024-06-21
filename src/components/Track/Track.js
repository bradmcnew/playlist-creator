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
                {props.track.previewUrl && (
                    <audio controls className={styles.Preview}>
                    <source src={props.track.previewUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                    </audio>
                )}
                <div className={styles.songInfo}>
                    <h3>{props.track.name}</h3>
                    <p>{props.track.artist} | {props.track.album}</p>
                </div>
            </div>
            {button}
        </div>
    );
}

export default Track;