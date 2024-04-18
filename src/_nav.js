import React from "react";
import CIcon from "@coreui/icons-react";
import { cilMap, cilStar } from "@coreui/icons";
import { CImage, CNavGroup, CNavItem } from "@coreui/react-pro";
import TrackX from "./views/icons/car.svg";
import ConnectX from "./views/icons/connectx.svg";
import DocX from "./views/icons/docx.svg";
import CarbonX from "./views/icons/carbonx.svg";

const _nav = [
  // TRACK X
  {
    component: CNavGroup,
    name: "TrackX",
    to: "/base",
    icon: (
      <CImage src={TrackX} style={{ marginRight: "24px", marginLeft: "3px" }} />
    ),
    items: [
      {
        component: CNavItem,
        name: "3PL Work Order Request",
        to: "/trackX/3PL",
      },
      {
        component: CNavItem,
        name: "Delivery Order",
        to: "/trackX/deliveryorder",
      },
      {
        component: CNavItem,
        name: "Drivers",
        to: "/trackX/drivers",
      },
      {
        component: CNavItem,
        name: "Fleets",
        to: "/trackX/fleets",
      },
      {
        component: CNavItem,
        name: "Main Customer Management",
        to: "/trackX/maincustomermanagement",
      },
      {
        component: CNavItem,
        name: "Live Monitoring",
        to: "/trackX/livemonitoring",
      },
    ],
  },

  // CONNECT X
  {
    component: CNavGroup,
    name: "ConnectX",
    to: "/base",
    icon: (
      <CImage
        src={ConnectX}
        style={{ marginRight: "22px", marginLeft: "3px" }}
      />
    ),

    items: [
      // My Stock
      {
        component: CNavGroup,
        name: "My Stock",
        to: "/connectX/mystock",
        items: [
          {
            component: CNavItem,
            name: "Items",
            to: "/mystock/items",
          },
          {
            component: CNavItem,
            name: "Administrative",
            to: "/mystock/administrative",
          },
          {
            component: CNavItem,
            name: "Repackaging",
            to: "/mystock/repackaging",
          },
          {
            component: CNavItem,
            name: "Company Bank Acc",
            to: "/mystock/companybankacc",
          },
          {
            component: CNavItem,
            name: "Division",
            to: "/mystock/division",
          },
          {
            component: CNavItem,
            name: "Vendors",
            to: "/mystock/vendors",
          },
        ],
      },

      // My Bound
      {
        component: CNavGroup,
        name: "My Bound",
        to: "/connectX/mybound",
        items: [
          {
            component: CNavItem,
            name: "In Bound",
            to: "/mybound/inbound",
          },
          {
            component: CNavItem,
            name: "Out Bound",
            to: "/mybound/outbound",
          },
        ],
      },

      // My Orders
      {
        component: CNavGroup,
        name: "My Orders",
        to: "/connectX/myorders",
        items: [
          {
            component: CNavItem,
            name: "Purchase Order",
            to: "/myorders/purchaseorder",
          },
          {
            component: CNavItem,
            name: "Sales Order",
            to: "/myorders/salesorder",
          },
        ],
      },
    ],
  },

  // DOC X
  {
    component: CNavGroup,
    name: "DocX",
    to: "/base",
    icon: (
      <CImage src={DocX} style={{ marginRight: "24px", marginLeft: "3px" }} />
    ),
    items: [
      // Customers
      {
        component: CNavGroup,
        name: "Customers",
        items: [
          {
            component: CNavItem,
            name: "Customer PIC",
            to: "/customers/customerPIC",
          },
        ],
      },

      // 3PL Group
      {
        component: CNavGroup,
        name: "3PL Group",
        items: [
          {
            component: CNavItem,
            name: "Rentee",
            to: "/3PLGroup/rentee",
          },
        ],
      },
    ],
  },

  // CARBON X
  {
    component: CNavGroup,
    name: "CarbonX",
    to: "/base",
    icon: (
      <CImage
        src={CarbonX}
        style={{ marginRight: "18px", marginLeft: "2px" }}
      />
    ),
    items: [
      // DASHBOARD
      {
        component: CNavItem,
        name: "Main Dashboard",
        to: "/dashboard",
        badge: {
          color: "info-gradient",
          text: "NEW",
        },
      },

      // Logger
      {
        component: CNavGroup,
        name: "Logger",
        to: "/logger",
        items: [
          {
            component: CNavItem,
            name: "Scope 1",
            to: "/logger/scope1",
          },
          {
            component: CNavItem,
            name: "Scope 2",
            to: "/logger/scope2",
          },
          {
            component: CNavItem,
            name: "Scope 3",
            to: "/logger/scope3",
          },
        ],
      },
    ],
  },

  {
    component: CNavGroup,
    name: "Maps",
    icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Google Maps",
        badge: {
          color: "danger-gradient",
          text: "PRO",
        },
        to: "/google-maps",
      },
      {
        component: CNavItem,
        name: "Open Layers",
        to: "/open-layers",
      },
    ],
  },

  {
    component: CNavGroup,
    name: "Pages",
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Login",
        to: "/login",
      },
      {
        component: CNavItem,
        name: "Register",
        to: "/register",
      },
      {
        component: CNavItem,
        name: "Error 404",
        to: "/404",
      },
      {
        component: CNavItem,
        name: "Error 500",
        to: "/500",
      },
    ],
  },
];

export default _nav;
