import { Schema, Document, model, models } from "mongoose";
import { IProblem } from "./problem.model";

export interface IUser extends Document {
  _id: string;
  clerkId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  photo: string;
  total_problems: number;
  total_comments: number;
  saveProblems: IProblem[];
  isExpert: boolean;
  plan: "free" | "pro";
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema({
  clerkId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  isExpert: { type: Boolean, default: false },
  plan: { type: String, default: "free" },
  total_problems: { type: Number, default: 0 },
  total_comments: { type: Number, default: 0 },
  saveProblems: [{ type: Schema.Types.ObjectId, ref: "Problem", default: [] }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const User = models?.User || model('User', UserSchema)

export default User;