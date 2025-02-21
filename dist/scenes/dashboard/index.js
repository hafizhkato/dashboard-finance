"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const theme_1 = require("../../theme");
const mockData_1 = require("../../data/mockData");
const DownloadOutlined_1 = __importDefault(require("@mui/icons-material/DownloadOutlined"));
const Email_1 = __importDefault(require("@mui/icons-material/Email"));
const PointOfSale_1 = __importDefault(require("@mui/icons-material/PointOfSale"));
const PersonAdd_1 = __importDefault(require("@mui/icons-material/PersonAdd"));
const Traffic_1 = __importDefault(require("@mui/icons-material/Traffic"));
const Header_1 = __importDefault(require("../../components/Header"));
const LineChart_1 = __importDefault(require("../../components/LineChart"));
const GeographyChart_1 = __importDefault(require("../../components/GeographyChart"));
const BarChart_1 = __importDefault(require("../../components/BarChart"));
const StatBox_1 = __importDefault(require("../../components/StatBox"));
const ProgressCircle_1 = __importDefault(require("../../components/ProgressCircle"));
const react_1 = __importDefault(require("react"));
const Dashboard = () => {
    const theme = (0, material_1.useTheme)();
    const colors = (0, theme_1.tokens)(theme.palette.mode);
    return (react_1.default.createElement(material_1.Box, { m: "20px" },
        react_1.default.createElement(material_1.Box, { display: "flex", justifyContent: "space-between", alignItems: "center" },
            react_1.default.createElement(Header_1.default, { title: "DASHBOARD", subtitle: "Welcome to your dashboard" }),
            react_1.default.createElement(material_1.Box, null,
                react_1.default.createElement(material_1.Button, { sx: {
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px",
                    } },
                    react_1.default.createElement(DownloadOutlined_1.default, { sx: { mr: "10px" } }),
                    "Download Reports"))),
        react_1.default.createElement(material_1.Box, { display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gridAutoRows: "140px", gap: "20px" },
            react_1.default.createElement(material_1.Box, { gridColumn: "span 3", sx: { backgroundColor: colors.primary[400], display: "flex", alignItems: "center", justifyContent: "center" } },
                react_1.default.createElement(StatBox_1.default, { title: "12", subtitle: "Emails Sent", progress: 0.75, increase: "+14%", icon: react_1.default.createElement(Email_1.default, { sx: { color: colors.greenAccent[600], fontSize: "26px" } }) })),
            react_1.default.createElement(material_1.Box, { gridColumn: "span 3", sx: { backgroundColor: colors.primary[400], display: "flex", alignItems: "center", justifyContent: "center" } },
                react_1.default.createElement(StatBox_1.default, { title: "431,225", subtitle: "Sales Obtained", progress: 0.50, increase: "+21%", icon: react_1.default.createElement(PointOfSale_1.default, { sx: { color: colors.greenAccent[600], fontSize: "26px" } }) })),
            react_1.default.createElement(material_1.Box, { gridColumn: "span 3", sx: { backgroundColor: colors.primary[400], display: "flex", alignItems: "center", justifyContent: "center" } },
                react_1.default.createElement(StatBox_1.default, { title: "32,441", subtitle: "New Clients", progress: 0.30, increase: "+5%", icon: react_1.default.createElement(PersonAdd_1.default, { sx: { color: colors.greenAccent[600], fontSize: "26px" } }) })),
            react_1.default.createElement(material_1.Box, { gridColumn: "span 3", sx: { backgroundColor: colors.primary[400], display: "flex", alignItems: "center", justifyContent: "center" } },
                react_1.default.createElement(StatBox_1.default, { title: "1,325,134", subtitle: "Traffic Received", progress: 0.80, increase: "+43%", icon: react_1.default.createElement(Traffic_1.default, { sx: { color: colors.greenAccent[600], fontSize: "26px" } }) })),
            react_1.default.createElement(material_1.Box, { gridColumn: "span 8", gridRow: "span 2", sx: { backgroundColor: colors.primary[400] } },
                react_1.default.createElement(material_1.Box, { mt: "25px", p: "0 30px", display: "flex ", justifyContent: "space-between", alignItems: "center" },
                    react_1.default.createElement(material_1.Box, null,
                        react_1.default.createElement(material_1.Typography, { variant: "h5", fontWeight: "600", color: colors.grey[100] }, "Revenue Generated"),
                        react_1.default.createElement(material_1.Typography, { variant: "h3", fontWeight: "bold", color: colors.greenAccent[500] }, "$59,342.32")),
                    react_1.default.createElement(material_1.Box, null,
                        react_1.default.createElement(material_1.IconButton, null,
                            react_1.default.createElement(DownloadOutlined_1.default, { sx: { fontSize: "26px", color: colors.greenAccent[500] } })))),
                react_1.default.createElement(material_1.Box, { height: "250px", m: "-20px 0 0 0" },
                    react_1.default.createElement(LineChart_1.default, { isDashboard: true }))),
            react_1.default.createElement(material_1.Box, { gridColumn: "span 4", gridRow: "span 2", sx: { backgroundColor: colors.primary[400] }, overflow: "auto" },
                react_1.default.createElement(material_1.Box, { display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `4px solid ${colors.primary[500]}`, color: colors.grey[100], p: "15px" },
                    react_1.default.createElement(material_1.Typography, { color: colors.grey[100], variant: "h5", fontWeight: "600" }, "Recent Transactions")),
                mockData_1.mockTransactions.map((transaction, i) => (react_1.default.createElement(material_1.Box, { key: `${transaction.txId}-${i}`, display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `4px solid ${colors.primary[500]}`, p: "15px" },
                    react_1.default.createElement(material_1.Box, null,
                        react_1.default.createElement(material_1.Typography, { color: colors.greenAccent[500], variant: "h5", fontWeight: "600" }, transaction.txId),
                        react_1.default.createElement(material_1.Typography, { color: colors.grey[100] }, transaction.user)),
                    react_1.default.createElement(material_1.Box, { color: colors.grey[100] }, transaction.date),
                    react_1.default.createElement(material_1.Box, { sx: {
                            backgroundColor: colors.greenAccent[500],
                            p: "5px 10px",
                            borderRadius: "4px",
                        } },
                        "$",
                        transaction.cost))))),
            react_1.default.createElement(material_1.Box, { gridColumn: "span 4", gridRow: "span 2", sx: { backgroundColor: colors.primary[400] }, p: "30px" },
                react_1.default.createElement(material_1.Typography, { variant: "h5", fontWeight: "600" }, "Campaign"),
                react_1.default.createElement(material_1.Box, { display: "flex", flexDirection: "column", alignItems: "center", mt: "25px" },
                    react_1.default.createElement(ProgressCircle_1.default, { size: 125 }),
                    react_1.default.createElement(material_1.Typography, { variant: "h5", color: colors.greenAccent[500], sx: { mt: "15px" } }, "$48,352 revenue generated"),
                    react_1.default.createElement(material_1.Typography, null, "Includes extra misc expenditures and costs"))),
            react_1.default.createElement(material_1.Box, { gridColumn: "span 4", gridRow: "span 2", sx: { backgroundColor: colors.primary[400] } },
                react_1.default.createElement(material_1.Typography, { variant: "h5", fontWeight: "600", sx: { padding: "30px 30px 0 30px" } }, "Sales Quantity"),
                react_1.default.createElement(material_1.Box, { height: "250px", mt: "-20px" },
                    react_1.default.createElement(BarChart_1.default, { isDashboard: true }))),
            react_1.default.createElement(material_1.Box, { gridColumn: "span 4", gridRow: "span 2", sx: { backgroundColor: colors.primary[400], padding: "30px" } },
                react_1.default.createElement(material_1.Typography, { variant: "h5", fontWeight: "600", sx: { marginBottom: "15px" } }, "Geography Based Traffic"),
                react_1.default.createElement(material_1.Box, { height: "200px" },
                    react_1.default.createElement(GeographyChart_1.default, { isDashboard: true }))))));
};
exports.default = Dashboard;
