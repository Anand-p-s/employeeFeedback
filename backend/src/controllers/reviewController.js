import mongoose from "mongoose";
import Review from "../models/reviewModel.js";

const getReviewByEmployeeId = async (req, res) => {
  const { employeeId } = req.params;

  try {
    const review = await Review.findOne({ employeeId }).populate('employeeId');
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const inviteEmployeeToReview = async (req, res) => {
  const { reviewForEmployeeId, invitedEmployeeId } = req.body;

  try {
    const review = await Review.findOneAndUpdate(
      {
        employeeId: reviewForEmployeeId,
      },
      {
        $addToSet: { assignedEmployees: invitedEmployeeId },
      },
      {
        new: true,
        upsert: true,
      }
    );

    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAssignedReview = async (req, res) => {
  const { id } = req.params;

  try {
    const reviews = await Review.find({
      assignedEmployees: { $in: [id] },
      "feedbacks.employeeId": { $nin: [id] },
    }).populate('employeeId');

    if (reviews.length === 0) {
      return res
        .status(404)
        .json({ message: "No reviews found for this employee" });
    }

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const submitFeedback = async (req, res) => {
  const { reviewId } = req.params;
  const { employeeId, comments } = req.body;
  console.log(reviewId);

  try {
    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).json({ message: "review not found" });
    }

    review.feedbacks.push({
      employeeId,
      comments,
    });

    await review.save();
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getReviewByEmployeeId,
  inviteEmployeeToReview,
  getAssignedReview,
  submitFeedback,
};
