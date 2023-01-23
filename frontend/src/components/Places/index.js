import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from "react-places-autocomplete";
import {useState} from "react"
import  GoogleMapReact  from "@react-google-maps/api";



    function Places(){
        const [address, setAddress] = useState("")
        const [coordinates, setCoordinates] = useState({
            lat: null, 
            lng: null
        })
    
        const handleSelect = async value => {
    
            
            //when clicked this google function will run 
            // finnding the geocode by address wich is all info on address
            const results = await geocodeByAddress(value)
            // when selected this function will run after which will get the latlng 
            // from the item selected
            const latlong = await getLatLng(results[0])
            // console.log(results)
            // console.log(latlong)
            //setting the address in usestate to the result/vaule of the results function
            setAddress(value)
            //setting the coordinnates the results of latlong function 
            // just passing in latlong as the new vaule.
            setCoordinates(latlong)
        }
    
        return (
            <div className="places-container">
                <p>lat: {coordinates.lat}</p>
    
                <p>lat: {coordinates.lng}</p>
    
                <p>Address: {address}</p>
    
         </div>
        )}


export default Places;


