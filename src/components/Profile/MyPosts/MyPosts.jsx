import React from "react";
import Post from "./Post/Post";
const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="txt" id="" cols="30" rows="2"></textarea>
                <button>Add post</button>
            </div>
            <Post message='text1' likeCount='2'/>
            <Post message='text2' likeCount='5'/>
            <Post message='text3' likeCount='1'/>
        </div>
    );
}

export default MyPosts;