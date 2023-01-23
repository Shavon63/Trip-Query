import {useState, useMemo, useCallback, useRef} from "react"
import GoogleMapReact from 'google-map-react'
import React from "react"
import Places from "../Places"
import Distances from "../Distances"
import "./maps.css"


export default function Maps(){

// use memo is like a useEffect, it generates a value once and then continue using it unless something changes 
// if i was to use a useEffect the value would only be useable inside the useEffect.
    const center = useMemo(()=>({lat: 40.6, lng: -73.5}), []);
    //to disable the icons on the map that will come up when zooming in
    const options = useMemo(()=>({
        // mapId was fetched from google from customized map
        mapID: "9223f86a903aea2a",
        disableDefaultUI: true, 
        clickableIcons: false,

    }),[])

    // is the reference to the current State of the map useable in a variable 
    const mapRef = useRef()
    // react function call back to create a function that can transfer data
    // once loaded the mapref will show its current state
    const loaded = useCallback(map => (mapRef.current = map), [])
    // ability to set a location 
    const [location, setLocation] = useState()
    return(
        <div className="container-map">
            <div className="controls">
                <h1 className="commute">commute?</h1>
                <Places/>
            </div> 
            <div className="map">
                <GoogleMapReact 
                zoom={10} 
                center={center} 
                mapContainerClassName="map-container"
                options={options}
                loaded={loaded}
                >
            
                </GoogleMapReact>
            </div>
            
        </div>
    )
}

