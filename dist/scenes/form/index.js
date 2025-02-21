"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const formik_1 = require("formik");
const yup = __importStar(require("yup"));
const useMediaQuery_1 = __importDefault(require("@mui/material/useMediaQuery"));
const Header_1 = __importDefault(require("../../components/Header"));
const react_1 = __importDefault(require("react"));
const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
};
const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
});
const Form = () => {
    const isNonMobile = (0, useMediaQuery_1.default)("(min-width:600px)");
    const handleFormSubmit = (values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
    };
    return (react_1.default.createElement(material_1.Box, { m: "20px" },
        react_1.default.createElement(Header_1.default, { title: "CREATE USER", subtitle: "Create a New User Profile" }),
        react_1.default.createElement(formik_1.Formik, { onSubmit: handleFormSubmit, initialValues: initialValues, validationSchema: checkoutSchema }, ({ values, errors, touched, handleBlur, handleChange, handleSubmit, }) => (react_1.default.createElement("form", { onSubmit: handleSubmit },
            react_1.default.createElement(material_1.Box, { display: "grid", gap: "30px", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", sx: {
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                } },
                react_1.default.createElement(material_1.TextField, { fullWidth: true, variant: "filled", type: "text", label: "First Name", onBlur: handleBlur, onChange: handleChange, value: values.firstName, name: "firstName", error: !!touched.firstName && !!errors.firstName, helperText: touched.firstName && errors.firstName, sx: { gridColumn: "span 2" } }),
                react_1.default.createElement(material_1.TextField, { fullWidth: true, variant: "filled", type: "text", label: "Last Name", onBlur: handleBlur, onChange: handleChange, value: values.lastName, name: "lastName", error: !!touched.lastName && !!errors.lastName, helperText: touched.lastName && errors.lastName, sx: { gridColumn: "span 2" } }),
                react_1.default.createElement(material_1.TextField, { fullWidth: true, variant: "filled", type: "text", label: "Email", onBlur: handleBlur, onChange: handleChange, value: values.email, name: "email", error: !!touched.email && !!errors.email, helperText: touched.email && errors.email, sx: { gridColumn: "span 4" } }),
                react_1.default.createElement(material_1.TextField, { fullWidth: true, variant: "filled", type: "text", label: "Contact Number", onBlur: handleBlur, onChange: handleChange, value: values.contact, name: "contact", error: !!touched.contact && !!errors.contact, helperText: touched.contact && errors.contact, sx: { gridColumn: "span 4" } }),
                react_1.default.createElement(material_1.TextField, { fullWidth: true, variant: "filled", type: "text", label: "Address 1", onBlur: handleBlur, onChange: handleChange, value: values.address1, name: "address1", error: !!touched.address1 && !!errors.address1, helperText: touched.address1 && errors.address1, sx: { gridColumn: "span 4" } }),
                react_1.default.createElement(material_1.TextField, { fullWidth: true, variant: "filled", type: "text", label: "Address 2", onBlur: handleBlur, onChange: handleChange, value: values.address2, name: "address2", error: !!touched.address2 && !!errors.address2, helperText: touched.address2 && errors.address2, sx: { gridColumn: "span 4" } })),
            react_1.default.createElement(material_1.Box, { display: "flex", justifyContent: "end", mt: "20px" },
                react_1.default.createElement(material_1.Button, { type: "submit", color: "secondary", variant: "contained" }, "Create New User")))))));
};
exports.default = Form;
