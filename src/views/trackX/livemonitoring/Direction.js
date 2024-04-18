import React, { useEffect, useRef, useState } from "react";
import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import PropTypes from "prop-types"; // Import PropTypes

const Direction = ({
  origin,
  destination,
  travelMode,
  routeColor,
  provideRouteAlternatives,
}) => {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const directionServicesRef = useRef();
  const directionRendererRef = useRef();
  const [routes, setRoutes] = useState([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  useEffect(() => {
    if (!routesLibrary || !map) return;
    directionServicesRef.current = new routesLibrary.DirectionsService();
    directionRendererRef.current = new routesLibrary.DirectionsRenderer({
      map,
      polylineOptions: {
        strokeColor: routeColor,
        strokeOpacity: 0.8,
        strokeWeight: 3,
        strokeDashArray: [10, 5],
        clickable: false,
        zIndex: 0,
      },
    });

    if (!directionServicesRef.current || !directionRendererRef.current) return;
    directionServicesRef.current
      .route({
        origin,
        destination,
        travelMode,
        provideRouteAlternatives,
      })
      .then((response) => {
        directionRendererRef.current.setDirections(response);
        setRoutes(response.routes);
      });
  }, [map, routesLibrary, origin, destination, travelMode]);

  useEffect(() => {
    if (!directionRendererRef.current) return;
    directionRendererRef.current.setRouteIndex(routeIndex);
  }, [routeIndex]);

  if (!leg) return null;

  return (
    <div className="directions">
      <h2>
        <strong>{selected.summary}</strong>{" "}
      </h2>
      <p>
        {leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}
      </p>

      <p>Distance: {leg.distance?.text}</p>
      <p>Duration: {leg.duration?.text}</p>
      <br />

      <h2>
        <strong>Other Routes</strong>{" "}
      </h2>
      <ul>
        {routes.map((route, index) => (
          <li key={route.summary}>
            <button onClick={() => setRouteIndex(index)}>
              {route.summary}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Validasi prop-types
Direction.propTypes = {
  origin: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  travelMode: PropTypes.string.isRequired,
  routeColor: PropTypes.string.isRequired,
  provideRouteAlternatives: PropTypes.bool.isRequired,
};

export default Direction;

// import React, { useEffect, useState } from "react";
// import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";

// const Direction = () => {
//   const map = useMap();
//   const routesLibrary = useMapsLibrary("routes");
//   const [directionService, setDirectionService] = useState();
//   const [directionRenderer, setDirectionRenderer] = useState();
//   const [routes, setRoutes] = useState([]);
//   const [routeIndex, setRouteIndex] = useState(0);
//   const selected = routes[routeIndex];
//   const leg = selected?.legs[0];

//   useEffect(() => {
//     // Jika tidak ada routeslibrary / map, maka return nothing
//     if (!routesLibrary || !map) return;
//     setDirectionService(new routesLibrary.DirectionsService());
//     setDirectionRenderer(new routesLibrary.DirectionsRenderer({ map }));
//   }, [routesLibrary, map]);

//   useEffect(() => {
//     if (!directionService || !directionRenderer) return;
//     directionService
//       .route({
//         origin: "Dipatiukur",
//         destination: "Gedung Sate",
//         // eslint-disable-next-line no-undef
//         travelMode: google.maps.TravelMode.DRIVING,
//         provideRouteAlternatives: true, // Mintalah rute alternatif
//       })
//       .then((response) => {
//         directionRenderer.setDirections(response);
//         setRoutes(response.routes);
//       });
//   }, [directionService, directionRenderer]);

//   useEffect(() => {
//     if (!directionRenderer) return;
//     directionRenderer.setRouteIndex(routeIndex);
//   }, [routeIndex, directionRenderer]);

//   if (!leg) return null;

//   return (
//     <div className="directions">
//       <h2>
//         <strong>{selected.summary}</strong>{" "}
//       </h2>
//       {/* Ambil kalimat sebelum koma */}
//       <p>
//         {leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}
//       </p>

//       <p>Distance: {leg.distance?.text}</p>
//       <p>Duration: {leg.duration?.text}</p>
//       <br />

//       <h2>
//         <strong>Other Routes</strong>{" "}
//       </h2>
//       <ul>
//         {/* Membuat elemen <li> untuk setiap rute dalam array routes */}
//         {routes.map((route, index) => (
//           <li key={route.summary}>
//             <button onClick={() => setRouteIndex(index)}>
//               {route.summary}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Direction;
