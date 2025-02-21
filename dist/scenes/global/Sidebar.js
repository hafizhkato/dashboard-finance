"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_pro_sidebar_1 = require("react-pro-sidebar");
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
require("react-pro-sidebar/dist/css/styles.css");
const theme_1 = require("../../theme");
const HomeOutlined_1 = __importDefault(require("@mui/icons-material/HomeOutlined"));
const PeopleOutlined_1 = __importDefault(require("@mui/icons-material/PeopleOutlined"));
const ContactsOutlined_1 = __importDefault(require("@mui/icons-material/ContactsOutlined"));
const ReceiptOutlined_1 = __importDefault(require("@mui/icons-material/ReceiptOutlined"));
const PersonOutlined_1 = __importDefault(require("@mui/icons-material/PersonOutlined"));
const CalendarTodayOutlined_1 = __importDefault(require("@mui/icons-material/CalendarTodayOutlined"));
const HelpOutlineOutlined_1 = __importDefault(require("@mui/icons-material/HelpOutlineOutlined"));
const BarChartOutlined_1 = __importDefault(require("@mui/icons-material/BarChartOutlined"));
const PieChartOutlineOutlined_1 = __importDefault(require("@mui/icons-material/PieChartOutlineOutlined"));
const TimelineOutlined_1 = __importDefault(require("@mui/icons-material/TimelineOutlined"));
const MenuOutlined_1 = __importDefault(require("@mui/icons-material/MenuOutlined"));
const MapOutlined_1 = __importDefault(require("@mui/icons-material/MapOutlined"));
const react_2 = __importDefault(require("react"));
const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = (0, material_1.useTheme)();
    const colors = (0, theme_1.tokens)(theme.palette.mode);
    return (react_2.default.createElement(react_pro_sidebar_1.MenuItem, { active: selected === title, style: {
            color: colors.grey[100],
        }, onClick: () => setSelected(title), icon: icon },
        react_2.default.createElement(material_1.Typography, null, title),
        react_2.default.createElement(react_router_dom_1.Link, { to: to })));
};
const Sidebar = () => {
    const theme = (0, material_1.useTheme)();
    const colors = (0, theme_1.tokens)(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = (0, react_1.useState)(false);
    const [selected, setSelected] = (0, react_1.useState)("Dashboard");
    return (react_2.default.createElement(material_1.Box, { sx: {
            height: "125vh",
            "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`,
            },
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important",
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hover": {
                color: "#868dfb !important",
            },
            "& .pro-menu-item.active": {
                color: "#6870fa !important",
            },
        } },
        react_2.default.createElement(react_pro_sidebar_1.ProSidebar, { collapsed: isCollapsed },
            react_2.default.createElement(react_pro_sidebar_1.Menu, { iconShape: "square" },
                react_2.default.createElement(react_pro_sidebar_1.MenuItem, { onClick: () => setIsCollapsed(!isCollapsed), icon: isCollapsed ? react_2.default.createElement(MenuOutlined_1.default, null) : undefined, style: {
                        margin: "10px 0 20px 0",
                        color: colors.grey[100],
                    } }, !isCollapsed && (react_2.default.createElement(material_1.Box, { display: "flex", justifyContent: "space-between", alignItems: "center", ml: "15px" },
                    react_2.default.createElement(material_1.Typography, { variant: "h5", color: colors.grey[100] }, "ADMINIS"),
                    react_2.default.createElement(material_1.IconButton, { onClick: () => setIsCollapsed(!isCollapsed) },
                        react_2.default.createElement(MenuOutlined_1.default, null))))),
                !isCollapsed && (react_2.default.createElement(material_1.Box, { mb: "25px" },
                    react_2.default.createElement(material_1.Box, { display: "flex", justifyContent: "center", alignItems: "center" },
                        react_2.default.createElement("img", { alt: "profile-user", width: "100px", height: "100px", src: `../../assets/logo.png`, style: { cursor: "pointer", borderRadius: "50%" } })),
                    react_2.default.createElement(material_1.Box, { textAlign: "center" },
                        react_2.default.createElement(material_1.Typography, { variant: "h5", color: colors.grey[100], fontWeight: "bold", sx: { m: "10px 0 0 0" } }, "apiz kato"),
                        react_2.default.createElement(material_1.Typography, { variant: "h6", color: colors.greenAccent[500] }, "startup founder")))),
                react_2.default.createElement(material_1.Box, { paddingLeft: isCollapsed ? undefined : "10%" },
                    react_2.default.createElement(Item, { title: "Dashboard", to: "/", icon: react_2.default.createElement(HomeOutlined_1.default, null), selected: selected, setSelected: setSelected }),
                    react_2.default.createElement(material_1.Typography, { variant: "h6", color: colors.grey[300], sx: { m: "15px 0 5px 20px" } }, "Data"),
                    react_2.default.createElement(Item, { title: "Manage Team", to: "/team", icon: react_2.default.createElement(PeopleOutlined_1.default, null), selected: selected, setSelected: setSelected }),
                    react_2.default.createElement(Item, { title: "Contacts Information", to: "/contacts", icon: react_2.default.createElement(ContactsOutlined_1.default, null), selected: selected, setSelected: setSelected }),
                    react_2.default.createElement(Item, { title: "Invoices Balances", to: "/invoices", icon: react_2.default.createElement(ReceiptOutlined_1.default, null), selected: selected, setSelected: setSelected }),
                    react_2.default.createElement(material_1.Typography, { variant: "h6", color: colors.grey[300], sx: { m: "15px 0 5px 20px" } }, "Pages"),
                    react_2.default.createElement(Item, { title: "Profile Form", to: "/form", icon: react_2.default.createElement(PersonOutlined_1.default, null), selected: selected, setSelected: setSelected }),
                    react_2.default.createElement(Item, { title: "Calendar", to: "/calendar", icon: react_2.default.createElement(CalendarTodayOutlined_1.default, null), selected: selected, setSelected: setSelected }),
                    react_2.default.createElement(Item, { title: "FAQ Page", to: "/faq", icon: react_2.default.createElement(HelpOutlineOutlined_1.default, null), selected: selected, setSelected: setSelected }),
                    react_2.default.createElement(material_1.Typography, { variant: "h6", color: colors.grey[300], sx: { m: "15px 0 5px 20px" } }, "Charts"),
                    react_2.default.createElement(Item, { title: "Bar Chart", to: "/bar", icon: react_2.default.createElement(BarChartOutlined_1.default, null), selected: selected, setSelected: setSelected }),
                    react_2.default.createElement(Item, { title: "Pie Chart", to: "/pie", icon: react_2.default.createElement(PieChartOutlineOutlined_1.default, null), selected: selected, setSelected: setSelected }),
                    react_2.default.createElement(Item, { title: "Line Chart", to: "/line", icon: react_2.default.createElement(TimelineOutlined_1.default, null), selected: selected, setSelected: setSelected }),
                    react_2.default.createElement(Item, { title: "Geography Chart", to: "/geography", icon: react_2.default.createElement(MapOutlined_1.default, null), selected: selected, setSelected: setSelected }))))));
};
exports.default = Sidebar;
