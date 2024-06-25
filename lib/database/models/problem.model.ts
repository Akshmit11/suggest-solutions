import { Document, Schema, model, models } from "mongoose";

export interface IComment extends Document {
  _id: string;
  text: string;
  user: { _id: string; username: string };
  isExpert: boolean;
  createdAt: Date;
}

const CommentSchema: Schema<IComment> = new Schema({
  text: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  isExpert: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
});

export interface IProblem extends Document {
  _id: string;
  title: string;
  category: string;
  user: { _id: string; username: string };
  aiSolution: string;
  comments: IComment[];
  timesSaved: number;
  expertComments: number;
  imageUrls: string[];
  createdAt: Date;
  updatedAt: Date;
}

const ProblemSchema: Schema<IProblem> = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  aiSolution: { type: String, required: true },
  comments: { type: [CommentSchema], default: [] },
  timesSaved: { type: Number, default: 0 },
  expertComments: { type: Number, default: 0 },
  imageUrls: { type: [String] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Problem = models.Problem || model("Problem", ProblemSchema);

export default Problem;
