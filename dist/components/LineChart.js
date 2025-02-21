"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const line_1 = require("@nivo/line");
const material_1 = require("@mui/material");
const theme_1 = require("../theme");
const mockData_1 = require("../data/mockData");
const react_1 = __importDefault(require("react"));
const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
    const theme = (0, material_1.useTheme)();
    const colors = (0, theme_1.tokens)(theme.palette.mode);
    return (react_1.default.createElement(line_1.ResponsiveLine, { data: mockData_1.mockLineData, theme: {
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
            tooltip: {
                container: {
                    color: colors.primary[500],
                },
            },
        }, colors: isDashboard ? { datum: "color" } : { scheme: "nivo" }, margin: { top: 50, right: 110, bottom: 50, left: 60 }, xScale: { type: "point" }, yScale: {
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
        }, yFormat: " >-.2f", curve: "catmullRom", axisTop: null, axisRight: null, axisBottom: {
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : "transportation",
            legendOffset: 36,
            legendPosition: "middle",
        }, axisLeft: {
            tickValues: 5,
            tickSize: 3,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : "count",
            legendOffset: -40,
            legendPosition: "middle",
        }, enableGridX: false, enableGridY: false, pointSize: 8, pointColor: { theme: "background" }, pointBorderWidth: 2, pointBorderColor: { from: "serieColor" }, pointLabelYOffset: -12, useMesh: true, legends: [
            {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                    {
                        on: "hover",
                        style: {
                            itemBackground: "rgba(0, 0, 0, .03)",
                            itemOpacity: 1,
                        },
                    },
                ],
            },
        ] }));
};
exports.default = LineChart;
