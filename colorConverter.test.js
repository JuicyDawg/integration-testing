const { hexToRgb } = require("./colorConverter");

describe("hexToRgb", () => {
    test("converts red from HEX to RGB", () => {
        expect(hexToRgb("#FF0000")).toEqual({
            r: 255,
            g: 0,
            b: 0
        });
    });

    test("converts green from HEX to RGB", () => {
        expect(hexToRgb("#00FF00")).toEqual({
            r: 0,
            g: 255,
            b: 0
        });
    });

    test("converts blue from HEX to RGB", () => {
        expect(hexToRgb("#0000FF")).toEqual({
            r: 0,
            g: 0,
            b: 255
        });
    });
});