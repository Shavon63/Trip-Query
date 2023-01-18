import { useState } from 'react';
import { useEffect} from 'react';
import {useNavigate} from "react-router-dom"
import { formSubmit } from '../../utils/api';

export default function SignUp({setIsLoggedIn, isLoggedIn, getUserData}) {
    // state declarations
    const initialState = {
        fullname: "",
        username: "",
        password: "",
        location: "",
    }

    const [formState, setFormState] = useState(initialState)
     const navigate = useNavigate()

        // update the input value as a user types
        const handleChange = (event) => {
            setFormState({ ...formState, [event.target.name]: event.target.value })
        }
    
        async function handleSubmit(event) {
            event.preventDefault()
            formSubmit(formState).then((data => {
                localStorage.token = data.token
                setIsLoggedIn(true)

            }))
            
            navigate("/")
            }
        
        


        return (
            <div className="containers">
                <h2 className="heading">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                <div className="input-texts">
                        <label htmlFor='fullname'>FullName</label>
                        <input
                            type='text'
                            name='fullname'
                            onChange={handleChange}
                            value={formState.fullname} />
                    </div>
                    <div className="input-texts">
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            name='username'
                            onChange={handleChange}
                            value={formState.username} />
                    </div>
    
                    <div className="input-texts">
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            name='password'
                            onChange={handleChange}
                            value={formState.password} />
                    </div>
    
                    <div className="input-texts">
                        <label htmlFor='Location'>Location</label>
                        <input
                            type='text'
                            name='location'
                            onChange={handleChange}
                            value={formState.location} />
                    </div>
    
                    <button type='submit' className="buttons" >Sign Up</button>
                </form>
            </div>
        )

}