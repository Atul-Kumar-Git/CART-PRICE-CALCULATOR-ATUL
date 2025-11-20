# Cart Price Calculator API

A minimal Express API that calculates the total cost of a shopping cart by multiplying each item's price by its quantity.

## Requirements
- Node.js 18+
- npm

## Setup
```bash
npm install
```

## Run
```bash
npm start
```
The server listens on `http://localhost:3000` by default.

## Test the Endpoint
Use `curl`, Postman, or any HTTP client to send a POST request:
```bash
curl -X POST http://localhost:3000/cart/total \
  -H "Content-Type: application/json" \
  -d '{
        "items": [
          { "name": "Pen", "price": 10, "qty": 3 },
          { "name": "Notebook", "price": 40, "qty": 2 }
        ]
      }'
```
Expected response:
```
{"total":110}
```

## Notes
- The API validates that `items` is a non-empty array and that each item has numeric `price` and `qty` values.
- Any other route responds with `404`.
