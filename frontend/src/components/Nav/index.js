import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import "./nav.css"



export default function Nav(props) {
    // state declaration: build JSX array of NavBar items
    const initialState = [<li className='nav-item' key='1'><Link id='nav-item'to='/'>Home</Link></li>]
    const [navItems, setNavItems] = useState(initialState)
    const [sendHome, setSendHome] = useState(false)
    

    
    // a function that will send user home after logging out. 
    // function logOut(){
    //     setSendHome(true)
    //     if(sendHome === true){
    //         <Navigate to="/"></Navigate>
    //     }
    // }

    // log out the user when the "Log Out" button is pressed
    const handleLogOut = () => {
        localStorage.clear()
        props.setIsLoggedIn(false)
        props.setUser({})
        setSendHome(true)
        if(sendHome){
            <Navigate to="/"></Navigate>
        }
        
        
    }

    // add NavBar items to JSX array depending on App login state
    useEffect(() => {
        if (props.loggedIn) {
            setNavItems(initialState.concat(
                <li className='nav-item' key='2'><Link id='nav-item'to='/Map'>Map</Link></li>,
                <li className='nav-item' key='3'><Link id='nav-item'to='/search'>Search</Link></li>,
                <li className='nav-item' key='4'><Link id='nav-item'to='/account'>Account</Link></li>,
               <button className="delete-button" onClick={handleLogOut}><li key='5'>Log Out</li></button>,
            ))
        } else {
            setNavItems(initialState.concat([
                <li className='nav-item' key='6'><Link id='nav-item'to='/signup'>Sign Up</Link></li>,
                <li className='nav-item' key='7'><Link id='nav-item'to='/login'>Log In</Link></li>,
                <li className='nav-item' key='8'><Link id='nav-item'to='/search'>Search</Link></li>
            ]))
        }
    }, [props.loggedIn])

    // render JSX
    return (
        <nav className='nav-container'>
            <div className="nav-wrapper">
                <Link id='nav-item'to="/" className="brand-logo">Travel Query</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {navItems}
                </ul>
            </div>
        </nav >
    )
}