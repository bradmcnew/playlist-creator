import React from "react";
import styles from "./Track.module.css";

const Track = (props) => {
    const handleAdd = () => {
        props.onAdd(props.track);
    }
    return (
        <div className={styles.track} >
            <div className={styles.card}>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            <button className={styles.remove} onClick={handleAdd}>+</button>
        </div>
    );
}

export default Track;