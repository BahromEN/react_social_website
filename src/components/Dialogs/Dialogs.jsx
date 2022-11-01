import React from "react";
import styles from "./Dialogs.module.css"

const Dialogs = (props) => {
    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog + ' ' + styles.active}>
                    Nika
                </div>
                <div className={styles.dialog}>
                    Zida
                </div>
                <div className={styles.dialog}>
                    Lara
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>Hello!</div>
                <div className={styles.message}>Yo!</div>
                <div className={styles.message}>Man!</div>
            </div>
        </div>
    );
}

export default Dialogs;