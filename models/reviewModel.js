// models/reviewModel.js
const { executeQuery } = require('../config/db');

async function createReview({ product_id, rating, comments, reviewer_name }) {
  const query = `INSERT INTO Reviews (product_id, rating, comments, reviewer_name)
                 VALUES (:product_id, :rating, :comments, :reviewer_name)`;
  await executeQuery(query, [product_id, rating, comments, reviewer_name]);
}

async function getAllReviews() {
  const query = 'SELECT * FROM Reviews';
  const result = await executeQuery(query);
  return result.rows;
}

async function getReviewsByProductId(productId) {
  const query = 'SELECT * FROM Reviews WHERE product_id = :productId';
  const result = await executeQuery(query, [productId]);
  return result.rows;
}

async function getTopRatedProducts(req, res) {
  try {
    const products = await reviewModel.getTopRatedProducts();
    console.log('Top rated products:', products); // Debugging line
    res.json(products);
  } catch (err) {
    console.error('Error fetching top-rated products:', err); // Debugging line
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
}


module.exports = {
  createReview,
  getAllReviews,
  getReviewsByProductId,
  getTopRatedProducts,
};
