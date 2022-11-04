import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />);

    let newMessageElement = React.createRef();
    let addMessageHandle = () => {
        let text = newMessageElement.current.value;
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <div>
                    <textarea 
                    ref={newMessageElement} 
                    onChange={onMessageChange}
                    value={props.dialogsPage.newMessageText}
                    cols="30" 
                    rows="2" />
                </div>
                <button onClick={addMessageHandle}>Add message</button>
            </div>

        </div>
    );
}

export default Dialogs;