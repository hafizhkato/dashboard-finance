"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const theme_1 = require("../theme");
const react_1 = __importDefault(require("react"));
const ProgressCircle = ({ progress = 0.75, size = 40 }) => {
    const theme = (0, material_1.useTheme)();
    const colors = (0, theme_1.tokens)(theme.palette.mode);
    const angle = progress * 360;
    return (react_1.default.createElement(material_1.Box, { sx: {
            background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
            ${colors.greenAccent[500]}`,
            borderRadius: "50%",
            width: `${size}px`,
            height: `${size}px`,
        } }));
};
exports.default = ProgressCircle;
