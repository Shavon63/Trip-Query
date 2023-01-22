import {useLoadScript} from "@react-google-maps/api"
import MapsFrame from "../../components/MapsFrame"


export default function Map(){
    // is loaded is a deconstructable variable calling on the api info from 
    // google maps using key
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
        libraries: ["places"]
    })
    // while waiting for information to be loaded 
    // loading ... will show 
    if(!isLoaded) 
    return(
        <h3>Loading...</h3>
    )


    return (
        <div>
            <MapsFrame />
        </div>
    )
}