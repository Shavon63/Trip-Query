import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import { formSubmit } from '../../utils/api';
import { motion } from 'framer-motion';
import './signup.css';

export default function SignUpForm({setIsLoggedIn, setUser}) {
    // state declarations
    const initialState = {
        fullname: "",
        username: "",
        password: "",
        location: "",
    }

    const [formState, setFormState] = useState(initialState)
    const [buttonClicked, setButtonClicked] = useState(false)
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
                setUser(data.user)

            }))
            
            navigate("/")
            }
        
        
        function motionButton(){
            setButtonClicked(!buttonClicked)
        }

        return (
            <div>
<motion.div className="signup-container" 
 animate={{y: 0}} 
 initial={{y:700}}
 transition={{type: "tween", duration: 1.5 }}>
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

                    {/* <!-- Submit button --> */}
                    <button type="submit" className="btn btn-primary btn-block mb-4" onClick={motionButton}>Sign up</button>

                    {/* <!-- Register buttons --> */}
                    <div className="text-center">
                        <p>Not a member? <a href="#!">Sign Up</a></p>
                    </div>
                    </form>
                <div className='sign-up-photo'>
                    <img src='../../assets/images/storefront.jpg' alt="storefront" className="storefront"/>
        
                </div>   
            </div>
            
</motion.div>
</div>
        )

}