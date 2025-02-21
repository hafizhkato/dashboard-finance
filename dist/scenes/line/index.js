"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const Header_1 = __importDefault(require("../../components/Header"));
const LineChart_1 = __importDefault(require("../../components/LineChart"));
const react_1 = __importDefault(require("react"));
const Line = () => {
    return (react_1.default.createElement(material_1.Box, { m: "20px" },
        react_1.default.createElement(Header_1.default, { title: "Line Chart", subtitle: "Simple Line Chart" }),
        react_1.default.createElement(material_1.Box, { height: "75vh" },
            react_1.default.createElement(LineChart_1.default, null))));
};
exports.default = Line;
