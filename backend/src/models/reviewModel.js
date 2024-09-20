import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  feedbacks: [
    {
      employeeId: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
      comments: String,
    },
  ],
  assignedEmployees: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  ],
});

export default mongoose.model("Review", ReviewSchema)