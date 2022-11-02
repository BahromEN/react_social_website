import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="txt" id="" cols="30" rows="2"></textarea>
                </div>
                <button>Add post</button>
            </div>
            { postsElements }
        </div>
    );
}

export default MyPosts;