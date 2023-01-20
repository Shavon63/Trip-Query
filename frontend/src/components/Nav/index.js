import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import "./main.css"



export default function Nav(props) {
    // state declaration: build JSX array of NavBar items
    const initialState = [<Link to='/'><li className='nav-item' key='1'>Home</li></Link>]
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
                <Link to='/Map'><li className='nav-item' key='2'>Map</li></Link>,
                <Link to='/search'><li className='nav-item' key='3'>Search</li></Link>,
                <Link to='/account'><li className='nav-item' key='4'>Account</li></Link>,
               <button className="delete-button" onClick={handleLogOut}><li key='5'>Log Out</li></button>,
            ))
        } else {
            setNavItems(initialState.concat([
                <Link to='/signup'><li className='nav-item' key='6'>Sign Up</li></Link>,
                <Link to='/login'><li className='nav-item' key='7'>Log In</li></Link>,
                <Link to='/search'><li className='nav-item' key='8'>Search</li></Link>
            ]))
        }
    }, [props.loggedIn])

    // render JSX
    return (
        <nav className='nav-container'>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Travel Query</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {navItems}
                </ul>
            </div>
        </nav >
    )
}