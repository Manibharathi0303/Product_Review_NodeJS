// README.md
# Product Reviews API

## Setup
1. Install Oracle SQL Developer
2. Create `Products` and `Reviews` tables in the Oracle database
3. Install dependencies:
```
npm install express body-parser oracledb dotenv
```
4. Start the server:
```
node server.js
```

## API Endpoints
- `POST /reviews` - Submit a review
- `GET /reviews` - Get all reviews
- `GET /reviews/:productId` - Get reviews for a specific product
- `GET /reviews/top-rated` - Get top 3 most positively reviewed products
