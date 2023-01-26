import { useState } from "react"
import { deleteUsers, updateUser } from "../../utils/api"
import "./profile.css"
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Account(props){
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        fullname: " ",
        username: " ",
        password: " ",
        location: " "

    })
    const [userInfo, setUserInfo] = useState(props.user)
    const navigate= useNavigate()


    function toggleEditForm(){
        setShowForm(!showForm)
    }
    function handleChange(event){
        setFormData({...formData, [event.target.name]: event.target.value} )
    }
    
    function deleteUser() {
        deleteUsers()
            localStorage.clear()
            props.setIsLoggedIn(false)
            navigate("/")
        
    } 
    function handleSubmit(event){
        event.preventDefault()
        updateUser(props.user.id, formData)
        .then((data)=> {
        setUserInfo(data)
        localStorage.token = data.token
        setShowForm(false)
    })
    }


  

    return (
        <motion.div className="container-holder" 
        animate={{y: 0}} 
        initial={{y:-900}}
        transition={{type: "tween", duration: 2 }}
        >
                <div className="container">
                    <div className="user-info">
                        <h1 className="user-name">Welcome {props.user.username}</h1>
                        <h2 className="user-location">Let's Explore {props.user.location} Together</h2>
                        <div className="button-container">
                        <button className="button-item" onClick={toggleEditForm}>Update User Info</button>
                        <button className="deleteBtn" onClick={deleteUser} > Delete Account</button>
                        </div>
                    </div>
                    {
                        showForm ?
                    <form className="account-form" onSubmit={handleSubmit}>
                        <div className="input-texts">
                                <label htmlFor="fullname">fullname</label>
                                <input
                                    type="text"
                                    name="fullname"
                                    placeholder="fullname"
                                    onChange={handleChange}
                                    value={formData.fullname}/>
                            </div>
                            <div className="input-texts">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="username"
                                    onChange={handleChange}
                                    value={formData.username}/>
                            </div>
                            <div className="input-texts">
                                <label htmlFor="password">Password</label>
                                <input
                                    type='password'
                                    name='password'
                                    placeholder="password"
                                    onChange={handleChange}
                                    value={formData.password}/>
                            </div>
            
                            <div className="input-texts">
                                <label htmlFor='location'>Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="location"
                                    onChange={handleChange}
                                    value={formData.location}/>
                            </div>
                            <button type="submit">Save</button>
                        </form> : null
                }
                
                </div>
        </motion.div>
    )
}