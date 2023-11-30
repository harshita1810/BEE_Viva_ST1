const Product = require('../models/productModel');

exports.addReview = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);
    const newReview = req.body;
    product.reviews.push(newReview);
    await product.save();
    res.status(201).json(newReview);
  } catch (error) {
    next(error);
  }
};

exports.getAllReviews = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const skip = (page - 1) * pageSize;

    const product = await Product.findById(req.params.productId);
    const reviews = product.reviews.slice(skip, skip + pageSize);
    res.json(reviews);
  } catch (error) {
    next(error);
  }
};

exports.updateReview = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);
    const review = product.reviews.id(req.params.reviewId);
    Object.assign(review, req.body);
    await product.save();
    res.json(review);
  } catch (error) {
    next(error);
  }
};

exports.deleteReview = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);
    product.reviews.id(req.params.reviewId).remove();
    await product.save();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};




