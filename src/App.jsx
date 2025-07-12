import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpForm from './pages/Signup'
import Home from './pages/Home'
import Video from './pages/Video'
import Splash from './pages/Splash';
import CompleteProfile from './pages/CompleteProfile';
import AddPhoto from './pages/AddPhoto';
import ContentFeed from './pages/ContentFeed';
import CategoryFilter from './pages/CategoryFilter';
import ChatVideoList from './pages/ChatVideoList';
import Profile from './pages/Profile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Splash/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUpForm/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/video/:id' element={<Video />}></Route>
          <Route path='/complete-profile' element={<CompleteProfile/>}></Route>
          <Route path='/add-photo' element={<AddPhoto/>}></Route>
          <Route path='/feed' element={<ContentFeed/>}></Route>
          <Route path='/categories' element={<CategoryFilter/>}></Route>
          <Route path='/chat-video' element={<ChatVideoList/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
