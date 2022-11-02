import React from "react";
import styles from './ProfileInfo.module.css';
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    className={styles.contentImg}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMN1qOruU-VKfPZvGbMEOwfYeLlAUixncnjP4Vi1zrYwsxb08UpZlBJfRDC9TbSzy-yw&usqp=CAU' alt='imd' />
            </div>
            <div className={styles.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
}

export default ProfileInfo;