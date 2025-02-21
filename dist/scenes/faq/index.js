"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const Header_1 = __importDefault(require("../../components/Header"));
const Accordion_1 = __importDefault(require("@mui/material/Accordion"));
const AccordionSummary_1 = __importDefault(require("@mui/material/AccordionSummary"));
const AccordionDetails_1 = __importDefault(require("@mui/material/AccordionDetails"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
const theme_1 = require("../../theme");
const react_1 = __importDefault(require("react"));
const FAQ = () => {
    const theme = (0, material_1.useTheme)();
    const colors = (0, theme_1.tokens)(theme.palette.mode);
    return (react_1.default.createElement(material_1.Box, { m: "20px" },
        react_1.default.createElement(Header_1.default, { title: "FAQ", subtitle: "Frequently Asked Questions Page" }),
        react_1.default.createElement(Accordion_1.default, { defaultExpanded: true },
            react_1.default.createElement(AccordionSummary_1.default, { expandIcon: react_1.default.createElement(ExpandMore_1.default, null) },
                react_1.default.createElement(Typography_1.default, { color: colors.greenAccent[500], variant: "h5" }, "An Important Question")),
            react_1.default.createElement(AccordionDetails_1.default, null,
                react_1.default.createElement(Typography_1.default, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),
        react_1.default.createElement(Accordion_1.default, { defaultExpanded: true },
            react_1.default.createElement(AccordionSummary_1.default, { expandIcon: react_1.default.createElement(ExpandMore_1.default, null) },
                react_1.default.createElement(Typography_1.default, { color: colors.greenAccent[500], variant: "h5" }, "Another Important Question")),
            react_1.default.createElement(AccordionDetails_1.default, null,
                react_1.default.createElement(Typography_1.default, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),
        react_1.default.createElement(Accordion_1.default, { defaultExpanded: true },
            react_1.default.createElement(AccordionSummary_1.default, { expandIcon: react_1.default.createElement(ExpandMore_1.default, null) },
                react_1.default.createElement(Typography_1.default, { color: colors.greenAccent[500], variant: "h5" }, "Your Favorite Question")),
            react_1.default.createElement(AccordionDetails_1.default, null,
                react_1.default.createElement(Typography_1.default, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),
        react_1.default.createElement(Accordion_1.default, { defaultExpanded: true },
            react_1.default.createElement(AccordionSummary_1.default, { expandIcon: react_1.default.createElement(ExpandMore_1.default, null) },
                react_1.default.createElement(Typography_1.default, { color: colors.greenAccent[500], variant: "h5" }, "Some Random Question")),
            react_1.default.createElement(AccordionDetails_1.default, null,
                react_1.default.createElement(Typography_1.default, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),
        react_1.default.createElement(Accordion_1.default, { defaultExpanded: true },
            react_1.default.createElement(AccordionSummary_1.default, { expandIcon: react_1.default.createElement(ExpandMore_1.default, null) },
                react_1.default.createElement(Typography_1.default, { color: colors.greenAccent[500], variant: "h5" }, "The Final Question")),
            react_1.default.createElement(AccordionDetails_1.default, null,
                react_1.default.createElement(Typography_1.default, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")))));
};
exports.default = FAQ;
