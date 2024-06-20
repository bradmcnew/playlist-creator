import React from "react";
import styles from "./Track.module.css";

const Track = (props) => {
    const handleClick = () => {
        props.onAdd(props.track);
        props.onRemove(props.track);
    }
    return (
        <div className={styles.track} >
            <div className={styles.card}>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            <button className={styles.remove} onClick={handleClick}>+</button>
        </div>
    );
}

export default Track;