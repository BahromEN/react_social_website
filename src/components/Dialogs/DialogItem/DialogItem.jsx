import React from "react";
import styles from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <img className={styles.userPhoto} src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" alt="img"/>
            <NavLink to={path}> { props.name } </NavLink>
        </div>
    );
}
export default DialogItem;