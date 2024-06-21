import React, {useState} from "react";
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('');
    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }
    const search = () => {
        props.onSearch(searchValue);
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            search();
        }
    }

    return (
        <div className={styles.SearchBar}>
            <input 
                className={styles.search} 
                name="search" 
                id="search" 
                type="text" 
                placeholder="Enter A Song, Album, or Artist" 
                onChange={handleChange} 
                onKeyDown={handleKeyPress}
                value={searchValue} />
        </div>
    );
}

export default SearchBar;