let store = {

    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'How are you?', likesCount: 2 },
                { id: 2, message: 'That is good idea!', likesCount: 5 },
                { id: 3, message: 'How old are you?', likesCount: 1 }
            ],
            newPostText: 'MY newPropsText'
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hello!' },
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

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    // addMessage() {
    //     let newMessage = {
    //         id: 7,
    //         message: this._state.dialogsPage.newMessageText,
    //         likesCount: 0
    //     };
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewMessageText(newMessage) {
    //     this._state.dialogsPage.newMessageText = newMessage;
    //     this._callSubscriber(this._state);
    // },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageText,
                likesCount: 0
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    }

}

export default store;