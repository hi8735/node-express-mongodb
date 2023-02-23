import { Document, model, Schema } from 'mongoose';

export interface UserDocument extends Document {
  name: string;
  email: string;
}

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const User = model<UserDocument>('User', userSchema);

export default User;