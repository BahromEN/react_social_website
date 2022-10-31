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
            <Post message='text1' likesCount='2'/>
            <Post message='text2' likesCount='5'/>
            <Post message='text3' likesCount='1'/>
        </div>
    );
}

export default MyPosts;