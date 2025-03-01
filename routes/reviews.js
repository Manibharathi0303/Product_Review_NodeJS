const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviewsController');

router.post('/', reviewsController.submitReview);
router.get('/', reviewsController.getAllReviews);
router.get('/:productId', reviewsController.getReviewsByProduct);
router.get('/top-rated', reviewsController.getTopRatedProducts);

module.exports = router;
