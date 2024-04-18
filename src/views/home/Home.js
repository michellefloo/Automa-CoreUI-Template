import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react-pro";
import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import SolutionAutoma from "src/assets/images/solution-automa.png";

const Home = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-3">
          <CCardHeader style={{ backgroundColor: "#0085FF", color: "white" }}>
            <FaRegEnvelope style={{ marginRight: "12px" }} />
            Welcome Message
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Hi Automers, <br />
              Thank you for trusting us to help you achieve a sustainable supply
              chain. <br /> <br />
              Automa is here to democratize the green economy. We help
              manufactures, operators and retailers achieve economic and
              environment sustainability through <br />
              (1) digitalization, (2) hassle-free carbon emission tracking, and
              (3) data monetization using supply chain activity analytics and
              the Internet of Things (IoT)
            </p>
          </CCardBody>
        </CCard>

        <CCard className="mb-4">
          <CCardHeader style={{ backgroundColor: "#0085FF", color: "white" }}>
            <FaRegEnvelope style={{ marginRight: "12px" }} />
            Welcome Message
          </CCardHeader>
          <CCardBody>
            <img className="img-fluid" src={SolutionAutoma} alt="" />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Home;
