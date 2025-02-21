"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const theme_1 = require("../theme");
const ProgressCircle_1 = __importDefault(require("./ProgressCircle"));
const react_1 = __importDefault(require("react"));
const StatBox = ({ title, subtitle, icon, progress, increase }) => {
    const theme = (0, material_1.useTheme)();
    const colors = (0, theme_1.tokens)(theme.palette.mode);
    return (react_1.default.createElement(material_1.Box, { width: "100%", m: "0 30px" },
        react_1.default.createElement(material_1.Box, { display: "flex", justifyContent: "space-between" },
            react_1.default.createElement(material_1.Box, null,
                icon,
                react_1.default.createElement(material_1.Typography, { variant: "h4", fontWeight: "bold", sx: { color: colors.grey[100] } }, title)),
            react_1.default.createElement(material_1.Box, null,
                react_1.default.createElement(ProgressCircle_1.default, { progress: progress }))),
        react_1.default.createElement(material_1.Box, { display: "flex", justifyContent: "space-between", mt: "2px" },
            react_1.default.createElement(material_1.Typography, { variant: "h5", sx: { color: colors.greenAccent[500] } }, subtitle),
            react_1.default.createElement(material_1.Typography, { variant: "h5", fontStyle: "italic", sx: { color: colors.greenAccent[600] } }, increase))));
};
exports.default = StatBox;
