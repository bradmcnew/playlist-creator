import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.h1}>Ja<span className={styles.highlight}>mmm</span>ers</h1>
      <h2 className={styles.h2}>Make the playlist you love</h2>
    </header>
  );
}

export default Header;