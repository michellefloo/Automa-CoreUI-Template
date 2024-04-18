import React from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react-pro";

const DeliveryOrder = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Delivery Order</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              The breadcrumb navigation provides links back to each previous
              page the user navigated through and shows the current location in
              a website or an application. You don’t have to add separators,
              because they automatically added in CSS through
            </p>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default DeliveryOrder;
