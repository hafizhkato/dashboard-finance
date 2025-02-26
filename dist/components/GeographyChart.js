"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const geo_1 = require("@nivo/geo");
const mockGeoFeature_1 = require("../data/mockGeoFeature");
const theme_1 = require("../theme");
const mockData_1 = require("../data/mockData");
const react_1 = __importDefault(require("react"));
const GeographyChart = ({ isDashboard = false }) => {
    const theme = (0, material_1.useTheme)();
    const colors = (0, theme_1.tokens)(theme.palette.mode);
    return (react_1.default.createElement(geo_1.ResponsiveChoropleth, { data: mockData_1.mockGeographyData, theme: {
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
        }, features: mockGeoFeature_1.geoFeatures.features, margin: { top: 0, right: 0, bottom: 0, left: 0 }, domain: [0, 1000000], unknownColor: "#666666", label: "properties.name", valueFormat: ".2s", projectionScale: isDashboard ? 40 : 150, projectionTranslation: isDashboard ? [0.49, 0.6] : [0.5, 0.5], projectionRotation: [0, 0, 0], borderWidth: 1.5, borderColor: "#ffffff", legends: !isDashboard
            ? [
                {
                    anchor: "bottom-left",
                    direction: "column",
                    justify: true,
                    translateX: 20,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: "left-to-right",
                    itemTextColor: colors.grey[100],
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemTextColor: "#ffffff",
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]
            : undefined }));
};
exports.default = GeographyChart;
