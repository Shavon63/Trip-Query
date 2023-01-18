
import './App.css';
import { useState, useEffect } from 'react';
import Search from './pages/Search/index.js';
import { Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import Map from './pages/Map';
import { getUserData } from './utils/api';
import UserProfile from './pages/UserProfile';
import axios from 'axios';




function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})


 
  useEffect(() => {
    if (localStorage.token) {
        setIsLoggedIn(true)
        // get user data
        getUserData()
        .then((data) => {
          setUser(data)
        })
    }
}, [loggedIn])


  return (
    <div className="App">
      <Nav loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/login" element={<Login loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path="/search" element ={<Search/>} />
        <Route path="/map" element ={<Map/>} />
        <Route path="/profile" element ={<UserProfile user={user} setIsLoggedIn={setIsLoggedIn}/>}/>


     </Routes>
    </div>
  );
}

export default App;
