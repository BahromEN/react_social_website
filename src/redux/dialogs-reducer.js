
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
    messages: [
        { id: 1, message: 'sed!' },
        { id: 2, message: 'Yo!!' },
        { id: 3, message: 'Man!' },
        { id: 4, message: 'dsdsd' },
        { id: 5, message: 'eeee' },
        { id: 6, message: 'fgggg' }
    ],
    dialogs: [
        { id: 1, name: 'Baha' },
        { id: 2, name: 'Nika' },
        { id: 3, name: 'Zida' },
        { id: 4, name: 'Lara' }
    ],
    newMessageText: ''
}
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageText,
                likesCount: 0
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});


export default dialogsReducer;

