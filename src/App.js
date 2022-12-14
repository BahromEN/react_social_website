import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
// import { addPost } from './redux/state';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Routes>

            <Route path='/profile'
              element={<Profile />} />

            <Route path='/dialogs'
              element={<DialogsContainer />} />

            <Route path='/news'
              element={<News />} />

            <Route path='/music'
              element={<Music />} />

            <Route path='/settings'
              element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;