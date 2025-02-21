"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const theme_1 = require("../theme");
const react_1 = __importDefault(require("react"));
const Header = ({ title, subtitle }) => {
    const theme = (0, material_1.useTheme)();
    const colors = (0, theme_1.tokens)(theme.palette.mode);
    return (react_1.default.createElement(material_1.Box, { mb: "30px" },
        react_1.default.createElement(material_1.Typography, { variant: "h4", color: colors.grey[100], fontWeight: "bold", sx: { m: "0 0 5px 0" } }, title),
        react_1.default.createElement(material_1.Typography, { variant: "h6", color: colors.greenAccent[400] }, subtitle)));
};
exports.default = Header;
