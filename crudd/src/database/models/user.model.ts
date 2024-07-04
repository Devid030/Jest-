import { Schema, model } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
}

export interface UserCreationParams {
  name: string;
  email: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const User = model<IUser>('User', userSchema);

export default User;

