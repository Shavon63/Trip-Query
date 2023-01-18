import {useState, useMemo, useCallback, useRef, Component} from "react"
import { GoogleMap, Marker, DirectionsRenderer, Circle, MarkerClusterer } from "@react-google-maps/api"
import GoogleMapReact from 'google-map-react'
import React from "react"
import Places from "../Places"
import Distances from "../Distances"
import "./main.css"

// class made to extend objects to map components
 class Maps extends Component{
    state ={
        center: {
            lat: 40.67,
            lng: -73.56,
        }, 
        zoom: 12,
        // use memo is like a useEffect, it generates a value once and then continue using it unless something changes 
// if i was to use a useEffect the value would only be useable inside the useEffect.

    }
   
    render(){
    return(
        <div className="container">
            <div className="controls">
                <h1>commute?</h1>
            </div>
            <div className="map">
                {/* default locations and zooms for when map dismounts and remounts */}
                <GoogleMapReact
                //api key neccessary for google maps to connect to app
                bootstrapURLKeys={{key: process.env.REACT_APP_MAPS_API_KEY}}
                 defaultZoom={this.state.zoom} 
                 defaultCenter = {{lat: 40.674, lng: -77.970}}  
                 center={this.state.center} 
                 // this will keep the class state always changing with where the current place is
                 onChange={({center, zoom}) =>{this.setState({center: center, zoom:zoom})}}  mapContainerClassName="map-container" ></GoogleMapReact>
            </div>
            
        </div>
    )
    }
}

export default Maps