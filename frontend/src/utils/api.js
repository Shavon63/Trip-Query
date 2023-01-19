// dependencies
import axios from "axios"

const config = {
    headers:{
        'Authorization': localStorage.getItem('token')
    }
};



// send a POST request to the /signup 
export async function formSubmit(formData) {
    const { data } = await axios.post('http://localhost:5002/users/signup/', formData)
    return data
}

// get user data if user is logged in
export async function logIn(formData) {
    // hit the user show route
    const { data } = await axios.post('http://localhost:5002/users/login/', formData)
    return data
}

// get user data if user is logged in
export async function getUserData() {
    // hit the user show route
    const { data } = await axios.get('http://localhost:5002/users/',  config)
    return data
}

export async function deleteUsers() {
    const {data} = await axios.delete('http://localhost:5002/users/', config)
    return data
}

export async function updateUser(userId, formData){
    const { data } = await axios.put('http://localhost:5002/users/' + userId, formData)
return data
}

