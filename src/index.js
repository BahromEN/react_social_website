import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'How are you?', likesCount: 2},
  {id: 2, message: 'That is good idea!', likesCount: 5},
  {id: 3, message: 'How old are you?', likesCount: 1}
]
let dialogs = [
  { id: 1, name: 'Baha' },
  { id: 2, name: 'Nika' },
  { id: 3, name: 'Zida' },
  { id: 4, name: 'Lara' }
];
let messages = [
  { id: 1, message: 'Hello!' },
  { id: 2, message: 'Yo!!' },
  { id: 3, message: 'Man!' },
  { id: 4, message: 'dsdsd' },
  { id: 5, message: 'eeee' },
  { id: 6, message: 'fgggg' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

reportWebVitals();
