# HEX to RGB REST API

A small REST API built with Node.js and Express that converts a HEX colour code into RGB values. The project was made for the DevOps course at LAB University of Applied Sciences to practise unit and integration testing.

**Version:** 1.0.0

## Features

- Converts a six-digit HEX colour (for example `FF0000`) to RGB
- Returns the result as JSON
- Unit tests for the conversion function and an integration test for the API endpoint

## Requirements

- Node.js 18 or newer
- npm

## Installation

```bash
git clone https://github.com/JuicyDawg/integration-testing.git
cd integration-testing
npm install
```

## Running the server

```bash
node server.js
```

The server starts at `http://localhost:3000`.

## Usage

Send a GET request with the HEX colour in the URL, without the `#`:

```
GET http://localhost:3000/rgb/FF0000
```

Response:

```json
{ "r": 255, "g": 0, "b": 0 }
```

## Running the tests

```bash
npm test
```

| Test file | Type | What it checks |
|---|---|---|
| `colorConverter.test.js` | Unit | `hexToRgb()` converts red, green and blue correctly |
| `app.test.js` | Integration | `GET /rgb/FF0000` returns status 200 and the correct RGB values |

## Project structure

| File | Description |
|---|---|
| `colorConverter.js` | The `hexToRgb()` conversion function |
| `app.js` | Express app with the `/rgb/:hex` route |
| `server.js` | Starts the server on port 3000 |

## Versioning

The project follows [Semantic Versioning](https://semver.org/) (MAJOR.MINOR.PATCH).

## License

This project is licensed under the ISC License. See [LICENSE](LICENSE) for details.

## Author

Nicolae Dobinda
