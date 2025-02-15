import React, { useEffect, useState, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';

function Map({ latitude, longitude }) {
  const [hospitals, setHospitals] = useState([]);
  const position = [latitude, longitude];

  // Memoize fetchHospitals to prevent unnecessary re-creation of the function
  const fetchHospitals = useCallback(async () => {
    const overpassQuery = `
      [out:json];
      (
        node["amenity"="hospital"](around:5000,${latitude},${longitude});
      );
      out body;
    `;

    try {
      const response = await axios.post(
        'https://overpass-api.de/api/interpreter',
        overpassQuery,
        { headers: { 'Content-Type': 'text/plain' } }
      );
      const hospitalData = response.data.elements;
      setHospitals(hospitalData);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
    }
  }, [latitude, longitude]); // Recreate fetchHospitals when latitude or longitude changes

  // Call fetchHospitals when latitude and longitude change
  useEffect(() => {
    if (latitude && longitude) {
      fetchHospitals();
    }
  }, [latitude, longitude, fetchHospitals]); // Include fetchHospitals in the dependency array

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>

      {hospitals.map((hospital) => (
        <Marker key={hospital.id} position={[hospital.lat, hospital.lon]}>
          <Popup>{hospital.tags.name || 'Unnamed Hospital'}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
