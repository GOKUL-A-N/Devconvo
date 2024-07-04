import mongoose from "mongoose"

// const urlRegex = /^(https?:\/\/)?([\d\w]+\.)+[a-z]{2,6}\/?$/;

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "title is required"],
    },
    description: {
      type: String,
      required: [true, "description is require"],
    },
    // image: {
    //   type: String,
    //   required: [true, "image is require"],
    //   // match: urlRegex,  
    // },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      require: [true, "user id is required"],
    },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);


export default blogModel;