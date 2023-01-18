// dependencies
import axios from "axios"


//function to retieve data from API
// export async function getSearchData(searchString){
//     const {data} = await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${searchString}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyBPFyfOvU96xoIgsYr5aN-ANWB-qihk2Uo`)
//     return data
// }

// export async function getSearchData(formData){
//     const {data} = await axios.post(`http://localhost:5002/maps`, formData)
//     return data
// }


// send a POST request to the /signup or /login endpoint
export async function formSubmit(formData) {
    const { data } = await axios.post('http://localhost:5002/users/a/', formData)
    return data
}

// get user data if user is logged in
export async function logIn(formData) {
    // hit the user show route
    const { data } = await axios.post('http://localhost:5002/users/login/', formData)
    return data
}

// get user data if user is logged in
export async function getUserData(userId) {
    // hit the user show route
    const { data } = await axios.get('http://localhost:5002/users/', + userId)
    return data
}