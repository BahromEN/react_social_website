import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from './Profile.module.css';
const Profile = () => {
    return (
        <div className={styles.content}>
            <div>
                <img className={styles.contentImg} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMN1qOruU-VKfPZvGbMEOwfYeLlAUixncnjP4Vi1zrYwsxb08UpZlBJfRDC9TbSzy-yw&usqp=CAU' alt='imd' />
            </div>
            <div>
                ava+description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;