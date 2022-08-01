const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true
    },
    avatar: {
      type: String,
      default:"/images/avatar2.jpg"  
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum:["user", "admin"],
      default: "user"
    },
    category:{
      type:String,
      enum:["ayudante de cocina", "cocinero", "chef"],
      default: "ayudante de cocina"
    },
    email:{
      type: String,
      required: true,
      unique: true
    },
    favoriterecipe: [""],
    isbloqued: Boolean,
    comments: [""],
    score: Number
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
