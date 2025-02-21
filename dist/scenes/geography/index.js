"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const GeographyChart_1 = __importDefault(require("../../components/GeographyChart"));
const Header_1 = __importDefault(require("../../components/Header"));
const theme_1 = require("../../theme");
const react_1 = __importDefault(require("react"));
const Geography = () => {
    const theme = (0, material_1.useTheme)();
    const colors = (0, theme_1.tokens)(theme.palette.mode);
    return (react_1.default.createElement(material_1.Box, { m: "20px" },
        react_1.default.createElement(Header_1.default, { title: "Geography", subtitle: "Simple Geography Chart" }),
        react_1.default.createElement(material_1.Box, { height: "75vh", border: `1px solid ${colors.grey[100]}`, borderRadius: "4px" },
            react_1.default.createElement(GeographyChart_1.default, null))));
};
exports.default = Geography;
