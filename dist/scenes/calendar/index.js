"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const Header_1 = __importDefault(require("../../components/Header"));
const BarChart_1 = __importDefault(require("../../components/BarChart"));
const react_1 = __importDefault(require("react"));
const Bar = () => {
    return (react_1.default.createElement(material_1.Box, { m: "20px" },
        react_1.default.createElement(Header_1.default, { title: "Bar Chart", subtitle: "Simple Bar Chart" }),
        react_1.default.createElement(material_1.Box, { height: "75vh" },
            react_1.default.createElement(BarChart_1.default, null))));
};
exports.default = Bar;
