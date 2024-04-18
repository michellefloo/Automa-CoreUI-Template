import React, { useRef, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CRow,
} from "@coreui/react-pro";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Autocomplete,
} from "@react-google-maps/api";
import { FaLocationArrow, FaTimes } from "react-icons/fa";

const apiKey = "AIzaSyCmIATqobqbCEU90nYtwd-PzCcj8EVOlDg";
const defaultZoom = 11;
const defaultCenter = { lat: -6.914744, lng: 107.60981 };

const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionResponse, setDirectionResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */

  const destinationRef = useRef();

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }

    // eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    const results = await directionService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  return (
    <div>
      {/* Form above the map */}
      <CCardBody>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1rem", // Adjust margin as needed
          }}
        >
          <CCard
            style={{
              width: "60rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CCardBody>
              <CInputGroup className="mb-3 gap-3">
                {isLoaded && ( // Tunggu hingga Google Maps API dimuat
                  <Autocomplete>
                    <CFormInput
                      ref={originRef}
                      placeholder="Origin"
                      aria-label="Origin"
                    />
                  </Autocomplete>
                )}
                {isLoaded && ( // Tunggu hingga Google Maps API dimuat
                  <Autocomplete>
                    <CFormInput
                      ref={destinationRef}
                      placeholder="Destination"
                      aria-label="Destination"
                    />
                  </Autocomplete>
                )}

                <CButton
                  className="rounded"
                  color="primary"
                  onClick={calculateRoute}
                >
                  Calculate Route
                </CButton>

                <CButton color="light" onClick={clearRoute}>
                  <FaTimes />
                </CButton>
              </CInputGroup>
              <CRow
                className="g-1"
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <CCol>
                  <CFormLabel className="mt-2">
                    Distance: {distance}{" "}
                  </CFormLabel>
                </CCol>
                <CCol>
                  <CFormLabel className="mt-2">Duration: {duration}</CFormLabel>
                </CCol>
                <CCol>
                  <CButton
                    color="light"
                    onClick={() => map.panTo(defaultCenter)}
                  >
                    <FaLocationArrow />
                  </CButton>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </div>
      </CCardBody>

      {/* Google Maps */}
      <CCardBody className="mb-4">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isLoaded && (
            <GoogleMap
              mapContainerStyle={{ height: `400px`, width: "60rem" }} // Sesuaikan lebar jika diperlukan
              center={defaultCenter}
              zoom={defaultZoom}
              onLoad={(map) => setMap(map)}
            >
              <Marker position={defaultCenter} />
              {directionResponse && (
                <DirectionsRenderer directions={directionResponse} />
              )}
            </GoogleMap>
          )}
        </div>
      </CCardBody>
    </div>
  );
};

export default GoogleMaps;
