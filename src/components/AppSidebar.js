import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CImage,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react-pro";

import { AppSidebarNav } from "./AppSidebarNav";

import logo from "src/assets/brand/automa-logo-black.png";
import logoInverse from "src/assets/brand/automa-logo-inverse.png";
import automaLogoMinInverse from "src/assets/brand/automa-logo-min-inverse.png";
import automaLogoMin from "src/assets/brand/automa-logo-min.png";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// sidebar nav config
import navigation from "../_nav";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const theme = useSelector((state) => state.theme);
  const [showAutomaLogoMin, setshowAutomaLogoMin] = useState(false); // State untuk menampilkan automaLogoMin
  const [showAutomaLogoFull, setShowAutomaLogoFull] = useState(true);

  theme === "dark"
    ? document.body.classList.add("dark-theme")
    : document.body.classList.remove("dark-theme");

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        {showAutomaLogoFull && (
          <img
            src={theme === "dark" ? logoInverse : logo}
            className="sidebar-brand-full me-3"
            alt="logo"
            height={40}
          />
        )}
        {showAutomaLogoMin && (
          <CImage
            className="c-sidebar-brand-minimized"
            src={theme === "dark" ? automaLogoMinInverse : automaLogoMin}
            alt="enermo logo minimized"
            height={35}
            style={{ display: showAutomaLogoMin ? "block" : "none" }} // Tambahkan kondisi untuk menampilkan automaLogoMin
          />
        )}
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => {
          dispatch({ type: "set", sidebarUnfoldable: !unfoldable });
          setshowAutomaLogoMin(!showAutomaLogoMin);
          setShowAutomaLogoFull(!showAutomaLogoFull);
        }}
      />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
