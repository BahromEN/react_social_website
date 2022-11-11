import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    let addMessageHandle = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }
    return <Dialogs updateNewMessageText={onMessageChange}
                    addMessage={addMessageHandle}
                    dialogsPage={state}/>
}

export default DialogsContainer;