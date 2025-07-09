import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    f_name: {
      type: String,
      default: "",
    },
    headline: {
      type: String,
      default: "",
    },
    curr_company: {
      type: String,
      default: "",
    },
    curr_location: {
      type: String,
      default: "",
    },
    profile_pic: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    cover_pic: {
      type: String,
      default:
        "https://i.pinimg.com/736x/c4/3d/c9/c43dc9656d6746500b02040d9cea73ad.jpg",
    },
    about: {
      type: String,
      default: "",
    },
    skills: {
      type: [String],
      default: [],
    },
    experience: [
      {
        designation: { type: String },
        company_name: { type: String },
        duration: { type: String },
        location: { type: String },
      },
    ],
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    pending_friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    resume: { type: String },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
