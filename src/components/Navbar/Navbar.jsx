import React from "react";
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={`${styles.item} ${styles.active}`}>
                <a href='#pp'>Profile</a>
            </div>
            <div className={`${styles.item}`}>
                <a href='#aa'>Messages</a>
            </div>
            <div className={`${styles.item}`}> 
                <a href='#ff'>News</a>
            </div>
            <div className={`${styles.item}`}>
                <a href='#hh'>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;