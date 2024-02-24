// import mongoose, { Schema } from "mongoose";

// const topicSchema = new Schema(
//   {
//     title: String,
//     description: String,
//     github:String,
//   },
//   {
//     timestamps: true,
//   }
// );

// const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

// export default Topic;



import mongoose, { Schema } from "mongoose";

// Topic Schema
const topicSchema = new Schema(
  {
    title: String,
    description: String,
    github: String,
  },
  {
    timestamps: true,
  }
);

// User Schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
  },
  email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
  },
  password: {
      type: String,
      required: [true, "Please provide a password"],
  },
  isVerfied: {
      type: Boolean,
      default: false,
  },
  isAdmin: {
      type: Boolean,
      default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
  },
  {
    timestamps: true,
  }
);

// Topic Model
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

// User Model
const User = mongoose.models.User || mongoose.model("User", userSchema);

export { Topic, User };
