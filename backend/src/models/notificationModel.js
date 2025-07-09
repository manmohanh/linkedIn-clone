import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    notification_type: {
      type: String,
      required: true,
      enum: ["friendRequest", "comment"],
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    postId: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const notificationModel = mongoose.model("notification", notificationSchema);
export default notificationModel;
