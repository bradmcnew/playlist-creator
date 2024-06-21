import React, {useState} from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = ({playlist}) => {
    const [playlistName, setPlaylistName] = useState('New Playlist');
    const handleChange = (e) => {
        setPlaylistName(e.target.value);
    }
    return (
        <div className={styles.playlist}>
            <input className={styles.name} onChange={handleChange} value={playlistName}></input>
            <Tracklist tracks={playlist} context={"playlist"} playlist={playlist}/>
            <button className={styles.save}>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;