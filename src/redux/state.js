let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'How are you?', likesCount: 2 },
            { id: 2, message: 'That is good idea!', likesCount: 5 },
            { id: 3, message: 'How old are you?', likesCount: 1 }
        ]
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
        ]
    },
    sidebar:{
        friends: [
            { id: 1, name: 'Kolya' },
            { id: 2, name: 'Dima' },
            { id: 3, name: 'Nina' },
            { id: 4, name: 'Lera' }
        ]
    }       
    

};

export default state;