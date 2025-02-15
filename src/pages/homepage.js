import React from "react";
import Map from '../components/map';
import Header from '../components/header';
import myGeolocation from "../hooks/myGeolocation";
function HomePage() {
    const {latitude, longitude}= myGeolocation();
    return (
        <div>
            <Header/>
            <h1> Nearby Hospitals </h1>
            {latitude && longitude ? (
                <Map latitude={latitude} longitude={longitude} />
            ):(
                <p>Loading your Location...</p>
            )}
        </div>
    );
}
export default HomePage;