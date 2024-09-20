import { Router } from "express";
import reviewController from "../controllers/reviewController.js";

const reviewRoutes = Router();

reviewRoutes.get("/:employeeId", reviewController.getReviewByEmployeeId)
reviewRoutes.post("/invite", reviewController.inviteEmployeeToReview)
reviewRoutes.get("/assigned/:id", reviewController.getAssignedReview)
reviewRoutes.post("/submit/:reviewId", reviewController.submitFeedback)

export default reviewRoutes