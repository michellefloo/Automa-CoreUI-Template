import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Direction from "./Direction";
import "./LiveMonitoring.css";

const LiveMonitoring = () => {
  const API_KEY = "AIzaSyCmIATqobqbCEU90nYtwd-PzCcj8EVOlDg";
  const MAP_ID = "bf51a910020fa25a";
  const position = { lat: -6.914744, lng: 107.60981 };

  return (
    <div
      style={{ height: "100vh", width: "100%" }}
      className="live-monitoring-container"
    >
      <APIProvider apiKey={API_KEY}>
        <Map
          defaultCenter={position}
          defaultZoom={10}
          mapId={MAP_ID}
          fullscreenControl={false}
          zoomControlOptions={{
            // eslint-disable-next-line no-undef
            position: google.maps.ControlPosition.LEFT_TOP,
          }}
          streetViewControlOptions={{
            // eslint-disable-next-line no-undef
            position: google.maps.ControlPosition.LEFT_TOP,
          }}
          mapTypeControlOptions={{
            // eslint-disable-next-line no-undef
            position: google.maps.ControlPosition.TOP_LEFT,
          }}
        >
          <div className="direction-container">
            <Direction
              destination={"Gedung Sate"}
              origin={"Dipatiukur"}
              travelMode={"DRIVING"}
              routeColor={"blue"}
              provideRouteAlternatives={true}
            />
          </div>

          <div className="direction-container">
            <Direction
              destination={"Tubagus Ismail"}
              origin={"Dipatiukur"}
              travelMode={"DRIVING"}
              routeColor={"red"}
              provideRouteAlternatives={true}
            />
          </div>
        </Map>
      </APIProvider>
    </div>
  );
};

export default LiveMonitoring;

// import React, { useState } from "react";
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   Pin,
//   InfoWindow,
// } from "@vis.gl/react-google-maps";

// const LiveMonitoring = () => {
//   const API_KEY = "AIzaSyCmIATqobqbCEU90nYtwd-PzCcj8EVOlDg";
//   const MAP_ID = "bf51a910020fa25a";
//   const position = { lat: -6.914744, lng: 107.60981 };
//   const [open, setOpen] = useState(false);

//   return (
//     <APIProvider apiKey={API_KEY}>
//       <div style={{ height: "100vh", width: "100%" }}>
//         <Map defaultZoom={9} defaultCenter={position} mapId={MAP_ID}>
//           <AdvancedMarker position={position} onClick={() => setOpen(true)}>
//             <Pin background="blue" borderColor="yellow" glyphColor="yellow" />
//           </AdvancedMarker>
//           {open && (
//             <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
//               <p>I am in Bandung!</p>
//             </InfoWindow>
//           )}
//         </Map>
//       </div>
//     </APIProvider>
//   );
// };

// export default LiveMonitoring;
