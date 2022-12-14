// import { combineReducers, createStore  } from "redux";
// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
// let store = createStore ();     
// // let store = configureStore ();
// let reducers = combineReducers({
//     profilePage: profileReducer,
//     dialogsPage: dialogsReducer,
//     sidebar: sidebarReducer
// });



// export default store;





import {configureStore} from "@reduxjs/toolkit";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
let store = configureStore({
    reducer:{
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        sidebar: sidebarReducer,
    }
})
export default store;





// import {configureStore} from "@reduxjs/toolkit";
// import DialogsReducer from "./Reducer/DialogsReducer";
// import ProfileReducer from "./Reducer/ProfileReducer";
// import SidBarReducer from "./Reducer/SidBarReducer";
// //Обратите внимание, что это работает только для одного уровня вложенности.
// // Если требуются вложенные редукторы, придется вызывать combineReducers() самостоятельно.
// let store = configureStore({
//     reducer:{
//         dialogsPage:DialogsReducer,
//         profilePage:ProfileReducer,
//         sidBarPage:SidBarReducer,
//     }
// })
// export default store