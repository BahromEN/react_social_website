import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}  key={p.id}/>)
    let newPostElement = React.createRef();

    let addPostHandle = () => {
        props.addPost();
    }

    let onPostChange = () => { 
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange}
                        name="txt"
                        cols="30"
                        rows="2" />
                </div>
                <button onClick={addPostHandle}>Add post</button>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;