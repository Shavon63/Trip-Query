import {useState, useMemo, useCallback, useRef} from "react"
import {GoogleMap, Marker, DirectionsRenderer, Circle, MarkerClusterer } from "@react-google-maps/api"
import GoogleMapReact from 'google-map-react'
import React from "react"
import Places from "../Places"
import Distances from "../Distances"
import "./main.css"


export default function Maps(){
    
   
// use memo is like a useEffect, it generates a value once and then continue using it unless something changes 
// if i was to use a useEffect the value would only be useable inside the useEffect.
    const center = useMemo(()=>({lat: 40.6, lng: -73.5}), []);
    //to disable the icons on the map that will come up when zooming in
    const options = useMemo(()=>({
        // mapId was fetched from google from customized map
        mapID: "1b0e466924e615a1",
        disableDefaultUI: true, 
        clickableIcons: false,

    }),[])
    // is the reference to the current State of the map useable in a variable 
    const mapRef = useRef()
    // react function call back to create a function that can transfer data
    // once loaded the mapref will show its current state
    const loaded = useCallback(map => (mapRef.current = map), [])
    return(
        <div className="container">
            <div className="controls">
                <h1>commute?</h1>
            </div>
            <div className="map">
                <GoogleMapReact 
                zoom={10} 
                center={center} 
                mapContainerClassName="map-container"
                options={options}
                loaded={loaded}>
                </GoogleMapReact>
            </div>
            
        </div>
    )
}

