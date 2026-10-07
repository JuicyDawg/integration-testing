const express = require("express");
const { hexToRgb } = require("./colorConverter");

const app = express();

/**
 * Converts a HEX color supplied in the URL to RGB values.
 * Example: GET /rgb/FF0000
 */
app.get("/rgb/:hex", (req, res) => {
    const rgb = hexToRgb(req.params.hex);
    res.json(rgb);
});

module.exports = app;