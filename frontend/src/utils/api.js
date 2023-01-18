// dependencies
import axios from "axios"

const config = {
    headers:{
        'Authorization': localStorage.getItem('token')
    }
};




// export async function getSearchData(formData){
//     const {data} = await axios.post(`http://localhost:5002/maps`, formData)
//     return data
// }


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

export async function deleteUser(userId) {
    const {data} = await axios.delete('http://localhost:5002/users/', userId, config)
    return data
}

export async function updateUser(formData, userId){
    const { data } = await axios.put(`http://localhost:5002/users/${userId}`,formData)
return data
}

