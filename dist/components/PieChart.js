"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pie_1 = require("@nivo/pie");
const theme_1 = require("../theme");
const material_1 = require("@mui/material");
const mockData_1 = require("../data/mockData");
const react_1 = __importDefault(require("react"));
const PieChart = () => {
    const theme = (0, material_1.useTheme)();
    const colors = (0, theme_1.tokens)(theme.palette.mode);
    return (react_1.default.createElement(pie_1.ResponsivePie, { data: mockData_1.mockPieData, theme: {
            axis: {
                domain: {
                    line: {
                        stroke: colors.grey[100],
                    },
                },
                legend: {
                    text: {
                        fill: colors.grey[100],
                    },
                },
                ticks: {
                    line: {
                        stroke: colors.grey[100],
                        strokeWidth: 1,
                    },
                    text: {
                        fill: colors.grey[100],
                    },
                },
            },
            legends: {
                text: {
                    fill: colors.grey[100],
                },
            },
        }, margin: { top: 40, right: 80, bottom: 80, left: 80 }, innerRadius: 0.5, padAngle: 0.7, cornerRadius: 3, activeOuterRadiusOffset: 8, borderColor: {
            from: "color",
            modifiers: [["darker", 0.2]],
        }, arcLinkLabelsSkipAngle: 10, arcLinkLabelsTextColor: colors.grey[100], arcLinkLabelsThickness: 2, arcLinkLabelsColor: { from: "color" }, enableArcLabels: false, arcLabelsRadiusOffset: 0.4, arcLabelsSkipAngle: 7, arcLabelsTextColor: {
            from: "color",
            modifiers: [["darker", 2]],
        }, defs: [
            {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
            },
            {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
            },
        ], legends: [
            {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#999",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                    {
                        on: "hover",
                        style: {
                            itemTextColor: "#000",
                        },
                    },
                ],
            },
        ] }));
};
exports.default = PieChart;
