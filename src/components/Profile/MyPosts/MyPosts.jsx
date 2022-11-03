import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value; 
        alert(text);
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} name="txt" cols="30" rows="2"></textarea>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            { postsElements }
        </div>
    );
}

export default MyPosts;