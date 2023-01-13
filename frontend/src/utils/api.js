// dependencies
import axios from "react"


//function to retieve data from API
export async function getSearchData(searchString){
    const {data} = await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${searchString}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyBO91G_8BINuFmA6qiiZsyB_-yQmGlpGss`)
    return data
}


// send a POST request to the /signup or /login endpoint
export async function formSubmit(formData) {
    const { data } = await axios.post('http://localhost:5002/users/signup', formData)
    return data
}

// get user data if user is logged in
export async function getUserData(userId) {
    // hit the user show route
    const { data } = await axios.get('http://localhost:5002/user/' + userId)
    return data
}