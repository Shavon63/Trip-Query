import {useLoadScript} from "@react-google-maps/api"
import MapsFrame from "../../components/MapsFrame"


export default function Map(){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
        // libraries: ["places"]
    })
    if(!isLoaded) 
    return(
        <h3>Loadinng...</h3>
    )


    return (
        <div>
            <MapsFrame />
        </div>
    )
}