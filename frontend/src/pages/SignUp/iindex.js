import { useState } from 'react';
import { useEffect} from 'react';
import {useNavigate} from "react-router-dom"
import { formSubmit } from '../../utils/api';
import './signup.css';

export default function SignUpForm({setIsLoggedIn, isLoggedIn, getUserData}) {
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
<div className="signup-container">
            <div className='form-pic-container'>
                    <form onSubmit={handleSubmit}>
                    {/* username input */}
                    <div className="form-outline mb-4">
                        <input 
                        type="text" 
                        name="fullname" 
                        className="form-control" 
                        onChange={handleChange}
                        value={formState.fullname}
                        placeholder="Full Name"
                        />
                        <label className="form-label" htmlFor="form2Example1"></label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                        <input 
                        type="text" 
                        name="username" 
                        className="form-control" 
                        onChange={handleChange}
                        value={formState.username}
                        placeholder="Username"
                        />
                        <label className="form-label" htmlFor="form2Example2"></label>
                    </div>

                    <div className="form-outline mb-4">
                        <input 
                        type="password" 
                        name="password" 
                        className="form-control" 
                        onChange={handleChange}
                        value={formState.password}
                        placeholder="password"
                        />
                        <label className="form-label" htmlFor="password"></label>
                    </div>

                    <div className="form-outline mb-4">
                        <input 
                        type="location" 
                        name="location" 
                        className="form-control" 
                        onChange={handleChange}
                        value={formState.location}
                        placeholder="Location"
                        />
                        <label className="form-label" htmlFor="location"></label>
                    </div>

                    {/* <!-- 2 column grid layout for inline styling --> */}
                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                        {/* <!-- Checkbox --> */}
                        <div className="form-check">
                            <input className="form-check-input" 
                            type="checkbox" 
                            value="" 
                            id="form2Example31" 
                            checked />
                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                        </div>
                        </div>

                    </div>

                    {/* <!-- Submit button --> */}
                    <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                    {/* <!-- Register buttons --> */}
                    <div className="text-center">
                        <p>Not a member? <a href="#!">Sign Up</a></p>
                    </div>
                    </form>
                <div className='sign-up-photo'>
                    <img src='../../assets/images/storefront.jpg' alt="storefront" className="storefront"/>
                </div>   
            </div>
            
</div>
        )

}