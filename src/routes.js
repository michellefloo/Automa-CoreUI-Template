import React from "react";

const Home = React.lazy(() => import("./views/home/Home"));

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

// Base
const Accordion = React.lazy(() => import("./views/base/accordion/Accordion"));
const Breadcrumbs = React.lazy(() =>
  import("./views/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() => import("./views/base/cards/Cards"));
const Carousels = React.lazy(() => import("./views/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("./views/base/collapses/Collapses"));
const ListGroups = React.lazy(() =>
  import("./views/base/list-groups/ListGroups")
);
const Navs = React.lazy(() => import("./views/base/navs/Navs"));
const Paginations = React.lazy(() =>
  import("./views/base/paginations/Paginations")
);
const Placeholders = React.lazy(() =>
  import("./views/base/placeholders/Placeholders")
);
const Popovers = React.lazy(() => import("./views/base/popovers/Popovers"));
const Progress = React.lazy(() => import("./views/base/progress/Progress"));
const Spinners = React.lazy(() => import("./views/base/spinners/Spinners"));
const Tables = React.lazy(() => import("./views/base/tables/Tables"));
const Tooltips = React.lazy(() => import("./views/base/tooltips/Tooltips"));

// TrackX
const TrackX = React.lazy(() => import("./views/trackX/TrackX"));
const ThreePLWorkOrderRequest = React.lazy(() =>
  import("./views/trackX/3PLWORequest/3PLWorkOrderRequest")
);
const DeliveryOrder = React.lazy(() =>
  import("./views/trackX/deliveryorder/DeliveryOrder")
);
const Drivers = React.lazy(() => import("./views/trackX/drivers/Drivers"));
const Fleets = React.lazy(() => import("./views/trackX/fleets/Fleets"));
const MainCustomerManagement = React.lazy(() =>
  import("./views/trackX/maincustomers/MainCustomerManagement")
);
const LiveMonitoring = React.lazy(() =>
  import("./views/trackX/livemonitoring/LiveMonitoring")
);

//Forms
const ChecksRadios = React.lazy(() =>
  import("./views/forms/checks-radios/ChecksRadios")
);
const DatePicker = React.lazy(() =>
  import("./views/forms/date-picker/DatePicker")
);
const DateRangePicker = React.lazy(() =>
  import("./views/forms/date-range-picker/DateRangePicker")
);
const FloatingLabels = React.lazy(() =>
  import("./views/forms/floating-labels/FloatingLabels")
);
const FormControl = React.lazy(() =>
  import("./views/forms/form-control/FormControl")
);
const InputGroup = React.lazy(() =>
  import("./views/forms/input-group/InputGroup")
);
const Layout = React.lazy(() => import("./views/forms/layout/Layout"));
const MultiSelect = React.lazy(() =>
  import("./views/forms/multi-select/MultiSelect")
);
const Range = React.lazy(() => import("./views/forms/range/Range"));
const Select = React.lazy(() => import("./views/forms/select/Select"));
const TimePicker = React.lazy(() =>
  import("./views/forms/time-picker/TimePicker")
);
const Validation = React.lazy(() =>
  import("./views/forms/validation/Validation")
);

// Icons
const CoreUIIcons = React.lazy(() =>
  import("./views/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("./views/icons/flags/Flags"));
const Brands = React.lazy(() => import("./views/icons/brands/Brands"));

// Notifications
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("./views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Toasts = React.lazy(() => import("./views/notifications/toasts/Toasts"));

// Plugins
const GoogleMaps = React.lazy(() =>
  import("./views/plugins/google-maps/GoogleMaps")
);
const OpenLayers = React.lazy(() =>
  import("./views/plugins/openlayers/OpenLayers")
);

const Widgets = React.lazy(() => import("./views/widgets/Widgets"));

const routes = [
  { path: "/", exact: true, name: "Home", element: Home },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },

  { path: "/trackX", name: "TrackX", element: TrackX, exact: true },
  {
    path: "/trackX/3PL",
    name: "ThreePLWorkOrderRequest",
    element: ThreePLWorkOrderRequest,
    exact: true,
  },
  {
    path: "/trackX/deliveryorder",
    name: "DeliveryOrder",
    element: DeliveryOrder,
    exact: true,
  },
  { path: "/trackX/drivers", name: "Drivers", element: Drivers, exact: true },
  { path: "/trackX/fleets", name: "Fleets", element: Fleets, exact: true },
  {
    path: "/trackX/maincustomermanagement",
    name: "MainCustomerManagement",
    element: MainCustomerManagement,
    exact: true,
  },
  {
    path: "/trackX/livemonitoring",
    name: "LiveMonitoring",
    element: LiveMonitoring,
    exact: true,
  },

  { path: "/base", name: "Base", element: Cards, exact: true },
  { path: "/base/accordion", name: "Accordion", element: Accordion },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", element: Breadcrumbs },
  { path: "/base/cards", name: "Cards", element: Cards },
  { path: "/base/carousels", name: "Carousel", element: Carousels },
  { path: "/base/collapses", name: "Collapse", element: Collapses },
  { path: "/base/list-groups", name: "List Groups", element: ListGroups },
  { path: "/base/navs", name: "Navs", element: Navs },
  { path: "/base/paginations", name: "Paginations", element: Paginations },
  { path: "/base/placeholders", name: "Placeholders", element: Placeholders },
  { path: "/base/popovers", name: "Popovers", element: Popovers },
  { path: "/base/progress", name: "Progress", element: Progress },
  { path: "/base/spinners", name: "Spinners", element: Spinners },
  { path: "/base/tables", name: "Tables", element: Tables },
  { path: "/base/tooltips", name: "Tooltips", element: Tooltips },

  { path: "/forms", name: "Forms", element: FormControl, exact: true },
  { path: "/forms/form-control", name: "Form Control", element: FormControl },
  { path: "/forms/select", name: "Select", element: Select },
  { path: "/forms/multi-select", name: "Multi Select", element: MultiSelect },
  {
    path: "/forms/checks-radios",
    name: "Checks & Radios",
    element: ChecksRadios,
  },
  { path: "/forms/range", name: "Range", element: Range },
  { path: "/forms/input-group", name: "Input Group", element: InputGroup },
  {
    path: "/forms/floating-labels",
    name: "Floating Labels",
    element: FloatingLabels,
  },
  { path: "/forms/date-picker", name: "Date Picker", element: DatePicker },
  {
    path: "/forms/date-range-picker",
    name: "Date Range Picker",
    element: DateRangePicker,
  },
  { path: "/forms/time-picker", name: "Time Picker", element: TimePicker },
  { path: "/forms/layout", name: "Layout", element: Layout },
  { path: "/forms/validation", name: "Validation", element: Validation },
  { path: "/icons", exact: true, name: "Icons", element: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", element: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", element: Flags },
  { path: "/icons/brands", name: "Brands", element: Brands },

  {
    path: "/notifications",
    name: "Notifications",
    element: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", element: Alerts },
  { path: "/notifications/badges", name: "Badges", element: Badges },
  { path: "/notifications/modals", name: "Modals", element: Modals },
  { path: "/notifications/toasts", name: "Toasts", element: Toasts },

  { path: "/google-maps", name: "GoogleMaps", element: GoogleMaps },
  { path: "/open-layers", name: "OpenLayers", element: OpenLayers },

  { path: "/widgets", name: "Widgets", element: Widgets },
];

export default routes;
