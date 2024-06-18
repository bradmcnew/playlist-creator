import React from "react";
import styles from "./Track.module.css";

const Track = ({track}) => {
    const trackCard = {
        name: track.name,
        artist: track.artist,
        album: track.album,
        id: track.id,
    }
    return (
        <div className={styles.track} >
            <div className={styles.card}>
                <h3>{trackCard.name}</h3>
                <p>{trackCard.artist} | {trackCard.album}</p>
            </div>
            <button className={styles.remove}>-</button>
        </div>
    );
}

export default Track;