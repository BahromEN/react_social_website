const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {

    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Lorem ipsum?', likesCount: 2 },
                { id: 2, message: 'Dolor sit amet!', likesCount: 5 },
                { id: 3, message: 'Consectetur adipiscing elit', likesCount: 1 }
            ],
            newPostText: 'MY newPropsText'
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Kolya' },
                { id: 2, name: 'Dima' },
                { id: 3, name: 'Nina' },
                { id: 4, name: 'Lera' }
            ]
        }
    },
    _callSubscriber() {
        console.log('State is changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageText,
                likesCount: 0
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    }

}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});


export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});


export default store;