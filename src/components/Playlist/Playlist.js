import React, {useState} from "react";
import styles from "./Playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = (props) => {
    const [isDefault, setIsDefault] = useState(true);
    const handleChange = (e) => {
        props.changeName(e.target.value);
        setIsDefault(false);
    }
    const handleFocus = () => {
        if (isDefault) {
            props.changeName('');
            setIsDefault(false);
        }
    }
    const handleBlur = () => {
        if (props.playlistName.trim() === '') {
            props.changeName('New Playlist');
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
                value={props.playlistName}
            />
            <Tracklist tracks={props.playlist} context={"playlist"} playlist={props.playlist}/>
            <button className={styles.save} onClick={props.savePlaylist}>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;