
import './App.css';
import { useState } from 'react';
import Search from './pages/Search/index.js.js';
import { Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import SignUp from './pages/SignUp';
import Login from './pages/LogIn';
import Home from './pages/Home';



function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})


 


  return (
    <div className="App">
      <Nav loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/login" element={<Login loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path="/search" element ={<Search />} />

     </Routes>
    </div>
  );
}

export default App;
