/**
 * Converts a hexadecimal color value to RGB.
 * @param {string} hex - Hex color in #RRGGBB format.
 * @returns {{r: number, g: number, b: number}} RGB color values.
 */
function hexToRgb(hex) {
    const value = hex.replace("#", "");

    return {
        r: parseInt(value.substring(0, 2), 16),
        g: parseInt(value.substring(2, 4), 16),
        b: parseInt(value.substring(4, 6), 16)
    };
}

module.exports = { hexToRgb };