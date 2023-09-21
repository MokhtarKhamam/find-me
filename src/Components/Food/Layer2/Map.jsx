// import { useState } from 'react';
// import { GoogleMap, Marker } from '@react-google-maps/api';

// function MyMap() {
//   const [markerIcon, setMarkerIcon] = useState({
//     url: 'https://path/to/custom-marker.png',
//     scaledSize: new window.google.maps.Size(50, 50),
//     anchor: new window.google.maps.Point(25, 50),
//   });

//   return (
//     <GoogleMap
//       center={{ lat: 37.7749, lng: -122.4194 }}
//       zoom={12}
//       mapContainerStyle={{ height: '400px', width: '100%' }}
//     >
//       <Marker
//         position={{ lat: 37.7749, lng: -122.4194 }}
//         icon={markerIcon}
//         onClick={() => {
//           setMarkerIcon({
//             url: 'https://path/to/updated-marker.png',
//             scaledSize: new window.google.maps.Size(60, 60),
//             anchor: new window.google.maps.Point(30, 60),
//           });
//         }}
//       />
//     </GoogleMap>
//   );
// }

// export default MyMap;
import { useLocation } from 'react-router-dom';

const Map = () => {
  const location = useLocation();
  const addressLat = location.state.lat;
  const addressLong = location.state.long;

  const restaurantLongitude = addressLong;
  const restaurantLatitude = addressLat;

  const url = `https://www.google.com/maps?q=${restaurantLatitude},${restaurantLongitude}&hl=es&z=14&output=embed`;

  return (
    <div style={{ height: "90vh" }}>
      <iframe
        src={url}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;


