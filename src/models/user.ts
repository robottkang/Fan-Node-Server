import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  username: string;
  decks: string[]; // 유저 덱 목록
}

const userSchema = new Schema({
  username: String,
  decks: [String],
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
