import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';



export default function Nav(props) {
    // state declaration: build JSX array of NavBar items
    const initialState = [<li key='1'><Link to='/'>Home</Link></li>]
    const [navItems, setNavItems] = useState(initialState)
    const [sendHome, setSendHome] = useState(false)
    
    // a function that will send user home after logging out. 
    function logOut(){
        setSendHome(true)
        if(sendHome === true){
            <Navigate to="/"></Navigate>
        }
    }

    // log out the user when the "Log Out" button is pressed
    const handleLogOut = () => {
        localStorage.clear()
        props.setIsLoggedIn(false)
        logOut()
    }

    // add NavBar items to JSX array depending on App login state
    useEffect(() => {
        if (props.loggedIn) {
            setNavItems(initialState.concat(
                <li key='2'><Link to='/Map'>Map</Link></li>,
                <li key='3'><Link to='/search'>Search</Link></li>,
                <li key='4'><button onClick={handleLogOut}>Log Out</button></li>,
            ))
        } else {
            setNavItems(initialState.concat([
                <li key='5'><Link to='/signup'>Sign Up</Link></li>,
                <li key='6'><Link to='/login'>Log In</Link></li>,
                <li key='7'><Link to='/search'>Search</Link></li>
            ]))
        }
    }, [props.loggedIn])

    // render JSX
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Travel Query</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {navItems}
                </ul>
            </div>
        </nav >
    )
}