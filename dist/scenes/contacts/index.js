"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const x_data_grid_1 = require("@mui/x-data-grid");
const theme_1 = require("../../theme");
const mockData_1 = require("../../data/mockData");
const Header_1 = __importDefault(require("../../components/Header"));
const material_2 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const Contacts = () => {
    const theme = (0, material_2.useTheme)();
    const colors = (0, theme_1.tokens)(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar ID" },
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
            field: "address",
            headerName: "Address",
            flex: 1,
        },
        {
            field: "city",
            headerName: "City",
            flex: 1,
        },
        {
            field: "zipCode",
            headerName: "Zip Code",
            flex: 1,
        },
    ];
    return (react_1.default.createElement(material_1.Box, { m: "20px" },
        react_1.default.createElement(Header_1.default, { title: "CONTACTS", subtitle: "List of Contacts for Future Reference" }),
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
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100]} !important`,
                },
            } },
            react_1.default.createElement(x_data_grid_1.DataGrid, { rows: mockData_1.mockDataContacts, columns: columns, slots: { toolbar: x_data_grid_1.GridToolbar } }))));
};
exports.default = Contacts;
