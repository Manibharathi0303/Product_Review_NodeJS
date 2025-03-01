Product Reviews API

This is a RESTful API built with Node.js and Express, integrating with an Oracle database to manage and analyze product reviews.

Features

Submit a new product review

Retrieve all reviews

Retrieve reviews for a specific product

Retrieve the top 3 most positively reviewed products

Tech Stack

Node.js

Express.js

Oracle Database

oracledb Node.js package

Prerequisites

Install Node.js and npm

Install Oracle Sql Developer from the below link

https://www.oracle.com/tools/downloads/sqldev-downloads-2311.html

Note : Windows 64-bit with JDK 11 included download this setup

Install Oracle Instant Client and add its path to your environment variables from the below link

https://www.oracle.com/database/technologies/instant-client/winx64-64-downloads.html

Note : Version 21.17.0.0.0

Project Structure

project-root/
├── config/
│   ├── db.js            // Oracle DB connection setup
├── routes/
│   ├── reviews.js      // API route handlers
├── controllers/
│   ├── reviewsController.js // Logic for review operations
├── models/
│   ├── reviewModel.js  // Review schema and DB queries
├── .env                // Environment variables
├── server.js           // Express server entry point
├── README.md           // Setup and usage instructions

Setup

Clone the repository:

git clone https://github.com/Manibharathi0303/Product_Review_NodeJSE.git
cd Product_Review_NodeJSE

Install dependencies:

npm install

Configure environment variables in .env:

PORT=3000
DB_USER=system
DB_PASSWORD=your_password
DB_CONNECT_STRING=localhost:1521/XE
ORACLE_CLIENT_PATH=C:\Oracle\instantclient_21_17

Start the server:

node server.js

API Endpoints

Submit a Review

POST /reviews

{
  "product_id": 1,
  "rating": 5,
  "comments": "Amazing product!",
  "reviewer_name": "John Doe"
}

Response:

{
  "message": "Review submitted successfully"
}

Get All Reviews

GET /reviews Response:

[
  {
    "review_id": 1,
    "product_id": 1,
    "rating": 5,
    "comments": "Great product",
    "reviewer_name": "Alice",
    "created_at": "2025-03-01"
  }
]

Get Reviews by Product ID

GET /reviews/****:productId Response:

[
  {
    "review_id": 1,
    "product_id": 1,
    "rating": 5,
    "comments": "Great product",
    "reviewer_name": "Alice",
    "created_at": "2025-03-01"
  }
]

Get Top Rated Products

GET /reviews/top-rated Response:

[
  {
    "product_id": 1,
    "average_rating": 4.9
  },
  {
    "product_id": 2,
    "average_rating": 4.8
  }
]

Troubleshooting

DPI-1047 Error: Ensure the Oracle Instant Client path is set correctly in your environment variables.

ORA-02291: Check if the product_id exists in the Products table before submitting a review.

License

MIT License

