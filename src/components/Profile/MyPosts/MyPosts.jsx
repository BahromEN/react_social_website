import React from "react";
import styles from './MyPosts.module.css';
const MyPosts = () => {
    return (
        
            <div>
                My posts
                <div className={styles.item}>
                    new post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
    );
}

export default MyPosts;