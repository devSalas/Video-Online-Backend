import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: String,
    email:String,
    password:String,
    avatar:String,
    description:String
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const User = model("User", UserSchema);

