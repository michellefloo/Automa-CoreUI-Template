import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CButtonGroup,
  CFormCheck,
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from "@coreui/react-pro";
import CIcon from "@coreui/icons-react";
import { cilMenu, cilMoon, cilSun } from "@coreui/icons";

import { AppBreadcrumb } from "./index";

import {
  AppHeaderDropdown,
  AppHeaderDropdownMssg,
  AppHeaderDropdownNotif,
} from "./header/index";

import logoInverse from "src/assets/brand/automa-logo-inverse.png";
import logo from "src/assets/brand/automa-logo-black.png";

const AppHeader = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme);

  theme === "dark"
    ? document.body.classList.add("dark-theme")
    : document.body.classList.remove("dark-theme");

  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <img
            src={theme === "dark" ? logoInverse : logo}
            className="sidebar-brand-full"
            alt="logo"
            height={40}
          />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="#" component={NavLink}>
              Company Name (ADVANCED)
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-auto me-4">
          <CButtonGroup aria-label="Theme switch">
            <CFormCheck
              type="radio"
              button={{ color: "primary" }}
              name="theme-switch"
              id="btn-light-theme"
              autoComplete="off"
              label={<CIcon icon={cilSun} />}
              checked={theme === "default"}
              onChange={() => dispatch({ type: "set", theme: "light" })}
            />
            <CFormCheck
              type="radio"
              button={{ color: "primary" }}
              name="theme-switch"
              id="btn-dark-theme"
              autoComplete="off"
              label={<CIcon icon={cilMoon} />}
              checked={theme === "dark"}
              onChange={() => dispatch({ type: "set", theme: "dark" })}
            />
          </CButtonGroup>
        </CHeaderNav>
        <CHeaderNav>
          <AppHeaderDropdownNotif />
          <AppHeaderDropdownMssg />
        </CHeaderNav>
        {/* Avatar */}
        <CHeaderNav className="ms-3 me-4">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
        <div className="ms-auto">IDR 23.000.000.000</div>
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
