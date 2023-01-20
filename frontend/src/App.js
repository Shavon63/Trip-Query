
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
import UserProfile from './pages/Account';
import axios from 'axios';
import SignUpForm from './pages/SignUp/iindex';
import Account from './pages/Account';
import Error from './pages/Error';




function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})


 
  useEffect(() => {
    if (localStorage.token) {
        setIsLoggedIn(true)
        getUserData()
        .then((data) => {
          setUser(data)
        })
    }
}, [])


  return (
    <div className="App">
      <Nav loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUpForm loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/login" element={<Login loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>}/>
        <Route path="/search" element ={<Search/>} />
        <Route path="/map" element ={<Map/>} />
        <Route path="/account" element ={<Account user={user} setIsLoggedIn={setIsLoggedIn}/>}/>

        <Route path="/*" element={<Error/>}/>

     </Routes>
    </div>
  );
}

export default App;
