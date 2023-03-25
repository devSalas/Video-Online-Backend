import { Schema, model } from "mongoose";

const CommentSchema = new Schema(
  {
    comentario: String,
    id_usuario: String,
    id_video: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Comment = model("Comment", CommentSchema);
