"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const x_data_grid_1 = require("@mui/x-data-grid");
const theme_1 = require("../../theme");
const mockData_1 = require("../../data/mockData");
const AdminPanelSettingsOutlined_1 = __importDefault(require("@mui/icons-material/AdminPanelSettingsOutlined"));
const LockOpenOutlined_1 = __importDefault(require("@mui/icons-material/LockOpenOutlined"));
const SecurityOutlined_1 = __importDefault(require("@mui/icons-material/SecurityOutlined"));
const Header_1 = __importDefault(require("../../components/Header"));
const react_1 = __importDefault(require("react"));
const Team = () => {
    const theme = (0, material_1.useTheme)();
    const colors = (0, theme_1.tokens)(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "accessLevel",
            headerName: "Access Level",
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (react_1.default.createElement(material_1.Box, { width: "60%", m: "0 auto", p: "5px", display: "flex", justifyContent: "center", sx: {
                        backgroundColor: access === "admin"
                            ? colors.greenAccent[600]
                            : access === "manager"
                                ? colors.greenAccent[700]
                                : colors.greenAccent[700],
                        borderRadius: "4px",
                    } },
                    access === "admin" && react_1.default.createElement(AdminPanelSettingsOutlined_1.default, null),
                    access === "manager" && react_1.default.createElement(SecurityOutlined_1.default, null),
                    access === "user" && react_1.default.createElement(LockOpenOutlined_1.default, null),
                    react_1.default.createElement(material_1.Typography, { color: colors.grey[100], sx: { ml: "5px" } }, access)));
            },
        },
    ];
    return (react_1.default.createElement(material_1.Box, { m: "20px" },
        react_1.default.createElement(Header_1.default, { title: "TEAM", subtitle: "Managing the Team Members" }),
        react_1.default.createElement(material_1.Box, { m: "40px 0 0 0", height: "75vh", sx: {
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                },
            } },
            react_1.default.createElement(x_data_grid_1.DataGrid, { checkboxSelection: true, rows: mockData_1.mockDataTeam, columns: columns }))));
};
exports.default = Team;
