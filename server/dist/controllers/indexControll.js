"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderIndex = void 0;
const renderIndex = (req, res) => {
    res.render("index", { layout: "main", title: "Conheça João Vitor" });
};
exports.renderIndex = renderIndex;
