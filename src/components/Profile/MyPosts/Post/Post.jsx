import React from "react";
import styles from './Post.module.css';
const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png" alt="" />
            {props.message}
            <div>
                <span>like {props.likesCount}</span> 
            </div>
            
        </div>
    );
}

export default Post;