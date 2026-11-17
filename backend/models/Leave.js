import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema(
  {
    employeeName: {
      type: String,
      required: true
    },
    employeeId: {
      type: String,
      required: true
    },
    leaveType: {
      type: String,
      required: true
    },
    fromDate: {
      type: Date,
      required: true
    },
    toDate: {
      type: Date,
      required: true
    },
    reason: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Leave", leaveSchema);
