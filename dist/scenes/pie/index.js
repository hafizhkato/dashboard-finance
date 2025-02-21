"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const Header_1 = __importDefault(require("../../components/Header"));
const PieChart_1 = __importDefault(require("../../components/PieChart"));
const react_1 = __importDefault(require("react"));
const Pie = () => {
    return (react_1.default.createElement(material_1.Box, { m: "20px" },
        react_1.default.createElement(Header_1.default, { title: "Pie Chart", subtitle: "Simple Pie Chart" }),
        react_1.default.createElement(material_1.Box, { height: "75vh" },
            react_1.default.createElement(PieChart_1.default, null))));
};
exports.default = Pie;
