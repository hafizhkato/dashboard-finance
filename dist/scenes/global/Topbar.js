"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = require("react");
const theme_1 = require("../../theme");
const InputBase_1 = __importDefault(require("@mui/material/InputBase"));
const LightModeOutlined_1 = __importDefault(require("@mui/icons-material/LightModeOutlined"));
const DarkModeOutlined_1 = __importDefault(require("@mui/icons-material/DarkModeOutlined"));
const NotificationsOutlined_1 = __importDefault(require("@mui/icons-material/NotificationsOutlined"));
const SettingsOutlined_1 = __importDefault(require("@mui/icons-material/SettingsOutlined"));
const PersonOutlined_1 = __importDefault(require("@mui/icons-material/PersonOutlined"));
const Search_1 = __importDefault(require("@mui/icons-material/Search"));
const react_2 = __importDefault(require("react"));
const Topbar = () => {
    const theme = (0, material_1.useTheme)();
    const colors = (0, theme_1.tokens)(theme.palette.mode);
    const colorMode = (0, react_1.useContext)(theme_1.ColorModeContext);
    return (react_2.default.createElement(material_1.Box, { display: "flex", justifyContent: "space-between", p: 2 },
        react_2.default.createElement(material_1.Box, { display: "flex", sx: { backgroundColor: colors.primary[400], borderRadius: "3px" } },
            react_2.default.createElement(InputBase_1.default, { sx: { ml: 2, flex: 1 }, placeholder: "Search" }),
            react_2.default.createElement(material_1.IconButton, { type: "button", sx: { p: 1 } },
                react_2.default.createElement(Search_1.default, null))),
        react_2.default.createElement(material_1.Box, { display: "flex" },
            react_2.default.createElement(material_1.IconButton, { onClick: colorMode.toggleColorMode }, theme.palette.mode === "dark" ? (react_2.default.createElement(DarkModeOutlined_1.default, null)) : (react_2.default.createElement(LightModeOutlined_1.default, null))),
            react_2.default.createElement(material_1.IconButton, null,
                react_2.default.createElement(NotificationsOutlined_1.default, null)),
            react_2.default.createElement(material_1.IconButton, null,
                react_2.default.createElement(SettingsOutlined_1.default, null)),
            react_2.default.createElement(material_1.IconButton, null,
                react_2.default.createElement(PersonOutlined_1.default, null)))));
};
exports.default = Topbar;
