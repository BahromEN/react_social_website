import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}



export default store;