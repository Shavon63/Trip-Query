import { useEffect, useState } from "react"
import { getUserData, updateUser } from "../../utils/api"
import axios from "axios";
import "./main.css"
import { useNavigate } from "react-router-dom";

export default function UserProfile(props){
    const [showForm, setShowForm] = useState(false)
    const [formData, SetFormData] = useState({
        fullname: " ",
        username: " ",
        password: " ",
        location: " ",

    })
    const [userInfo, setUserInfo] = useState({})
    const navigate= useNavigate()

    useEffect(()=>{
        SetFormData(props.user)
        console.log(formData)
    },[])

    function toggleEditForm(){
        setShowForm(!showForm)
    }
    function handleChange(event){
        SetFormData({...formData, [event.target.name]: event.target.value} )
        console.log(formData)
    }
    
    
    function deleteUser() {
        
        deleteUser()
        localStorage.clear()
        props.setIsLoggedIn (false)
        navigate("/")
    } 
    function handleSubmit(event){
        event.preventDefault()
        updateUser(formData, props.user._id)
        .then((data)=> {
        setUserInfo(data)
        setShowForm(false)
        console.log(userInfo)
    })
    }

   

  

    return (

        <div className="container">
            <div className="user-info">
                <h1 className="user-name">Welcome {props.user.username}</h1>
                <h2>Would You Like To Explore {props.user.location}</h2>
                <div className="button-container">
                <button className="button-item" onClick={toggleEditForm}>Update User Info</button>
                <button className="deleteBtn" onClick={()=> deleteUser()} > Delete Account</button>
                </div>
            </div>
            {
                showForm ?
            <form onSubmit={handleSubmit}>
                <div className="input-texts">
                        <label htmlFor='fullname'>FullName</label>
                        <input
                            type='text'
                            name='fullname'
                            onChange={handleChange}
                            value={formData.fullname} />
                    </div>
                    <div className="input-texts">
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            name='username'
                            onChange={handleChange}
                            value={formData.username} />
                    </div>
    
                    <div className="input-texts">
                        <label htmlFor='location'>Location</label>
                        <input
                            type='text'
                            name='location'
                            onChange={handleChange}
                            value={formData.location} />
                    </div>
                    <button type="submit">Save</button>
                </form> : null
        }
           
        </div>
    )
}