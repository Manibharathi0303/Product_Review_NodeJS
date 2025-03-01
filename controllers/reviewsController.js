const reviewModel = require('../models/reviewModel');

async function submitReview(req, res) {
  try {
    const { product_id, rating, comments, reviewer_name } = req.body;
    if (!product_id || !rating || rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Invalid input' });
    }
    await reviewModel.createReview({ product_id, rating, comments, reviewer_name });
    res.status(201).json({ message: 'Review submitted successfully' });
  } catch (err) {
    console.error('Error in submitReview:', err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
}

async function getAllReviews(req, res) {
  try {
    const reviews = await reviewModel.getAllReviews();
    res.json(reviews);
  } catch (err) {
    console.error('Error in getAllReviews:', err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
}

async function getReviewsByProduct(req, res) {
  try {
    const { productId } = req.params;
    const reviews = await reviewModel.getReviewsByProductId(productId);
    res.json(reviews);
  } catch (err) {
    console.error('Error in getReviewsByProduct:', err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
}

async function getTopRatedProducts(req, res) {
  try {
    const products = await reviewModel.getTopRatedProducts();
    res.json(products);
  } catch (err) {
    console.error('Error in getTopRatedProducts:', err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
}

module.exports = { submitReview, getAllReviews, getReviewsByProduct, getTopRatedProducts };
