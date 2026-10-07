const request = require("supertest");
const app = require("./app");

describe("GET /rgb/:hex", () => {
    test("converts HEX value to RGB through the REST API", async () => {
        const response = await request(app).get("/rgb/FF0000");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            r: 255,
            g: 0,
            b: 0
        });
    });
});