"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//light and dark mode
const material_1 = require("@mui/material");
const theme_1 = require("./theme");
const Topbar_1 = __importDefault(require("./scenes/global/Topbar"));
const dashboard_1 = __importDefault(require("./scenes/dashboard"));
const Sidebar_1 = __importDefault(require("./scenes/global/Sidebar"));
const team_1 = __importDefault(require("./scenes/team"));
const invoices_1 = __importDefault(require("./scenes/invoices"));
const contacts_1 = __importDefault(require("./scenes/contacts"));
const bar_1 = __importDefault(require("./scenes/bar"));
const form_1 = __importDefault(require("./scenes/form"));
const line_1 = __importDefault(require("./scenes/line"));
const pie_1 = __importDefault(require("./scenes/pie"));
const faq_1 = __importDefault(require("./scenes/faq"));
const geography_1 = __importDefault(require("./scenes/geography"));
const calendar_1 = __importDefault(require("./scenes/calendar"));
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
function App() {
    const [isSidebar, setIsSidebar] = (0, react_1.useState)(true);
    const [theme, colorMode] = (0, theme_1.useMode)();
    return (React.createElement(theme_1.ColorModeContext.Provider, { value: colorMode },
        React.createElement(material_1.ThemeProvider, { theme: theme },
            React.createElement(material_1.CssBaseline, null),
            React.createElement("div", { className: "app" },
                React.createElement(Sidebar_1.default, { isSidebar: isSidebar }),
                React.createElement("main", { className: "content" },
                    React.createElement(Topbar_1.default, { setIsSidebar: setIsSidebar }),
                    React.createElement(react_router_dom_1.Routes, null,
                        React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(dashboard_1.default, null) }),
                        React.createElement(react_router_dom_1.Route, { path: "/team", element: React.createElement(team_1.default, null) }),
                        React.createElement(react_router_dom_1.Route, { path: "/contacts", element: React.createElement(contacts_1.default, null) }),
                        React.createElement(react_router_dom_1.Route, { path: "/invoices", element: React.createElement(invoices_1.default, null) }),
                        React.createElement(react_router_dom_1.Route, { path: "/form", element: React.createElement(form_1.default, null) }),
                        React.createElement(react_router_dom_1.Route, { path: "/bar", element: React.createElement(bar_1.default, null) }),
                        React.createElement(react_router_dom_1.Route, { path: "/pie", element: React.createElement(pie_1.default, null) }),
                        React.createElement(react_router_dom_1.Route, { path: "/line", element: React.createElement(line_1.default, null) }),
                        React.createElement(react_router_dom_1.Route, { path: "/faq", element: React.createElement(faq_1.default, null) }),
                        React.createElement(react_router_dom_1.Route, { path: "/geography", element: React.createElement(geography_1.default, null) }),
                        React.createElement(react_router_dom_1.Route, { path: "/calendar", element: React.createElement(calendar_1.default, null) })))))));
}
exports.default = App;
