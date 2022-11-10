import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {

    let addPostHandle = () => {
        props.store.dispatch(addPostActionCreator());
    }
        
    let onPostChange = (text) => { 
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts updateNewPostText={ onPostChange } 
                 addPost={ addPostHandle } 
                 posts={props.store.profilePage.posts}/>
    );
}

export default MyPostsContainer;