import { Schema, Document, model, models } from "mongoose";

export interface IPost extends Document {
  _id: string;
  description: string;
  imageUrls: string[];
  expert: { _id: string; fullName: string, category: string };
  user: { _id: string; username: string };
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema: Schema<IPost> = new Schema({
  description: { type: String, required: true },
  imageUrls: { type: [String] },
  expert: { type: Schema.Types.ObjectId, ref: "Expert", required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Post = models?.Post || model("Post", PostSchema);

export default Post;
