import Home from './pages/Home'
import Topbar from './components/Topbar'
import SinglePage from './pages/SinglePage'
import Write from './pages/Write'
import Settings from './components/Settings'
import Login from './components/Login'
import Register from './components/Register'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Announcement from './components/Announcement'
import SinglePost from './components/SinglePost'

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
            <Topbar/>
            <Routes>
                <Route exact path='/' element={<Home/>}>
                    <Route path='register' element={<Register/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="write" element={<Write/>} />
                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
 

export default App

