const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.post('/:productId/reviews', reviewController.addReview);
router.get('/:productId/reviews', reviewController.getAllReviews);
router.put('/:productId/reviews/:reviewId', reviewController.updateReview);
router.delete('/:productId/reviews/:reviewId', reviewController.deleteReview);

module.exports = router;
