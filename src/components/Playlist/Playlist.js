import React, {useState, useEffect} from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = ({playlist}) => {
    const [playlistName, setPlaylistName] = useState('New Playlist');
    const [isDefault, setIsDefault] = useState(true);
    const handleChange = (e) => {
        setPlaylistName(e.target.value);
        setIsDefault(false);
    }
    const handleFocus = () => {
        if (isDefault) {
            setPlaylistName('');
            setIsDefault(false);
        }
    }
    const handleBlur = () => {
        if (playlistName.trim() === '') {
            setPlaylistName('New Playlist');
            setIsDefault(true);
        }
    }
    return (
        <div className={styles.playlist}>
            <input 
                className={styles.name} 
                onChange={handleChange} 
                onFocus={handleFocus} 
                onBlur={handleBlur} 
                value={playlistName}
            />
            <Tracklist tracks={playlist} context={"playlist"} playlist={playlist}/>
            <button className={styles.save}>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;