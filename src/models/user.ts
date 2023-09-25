import mongoose, { Document, Schema, Types } from 'mongoose';
import Deck, { IDeck } from './deck';

export interface IUser extends Document {
  username: string;
  decks: Types.ObjectId[] | IDeck[]; // 유저 덱 목록
}

const userSchema = new Schema({
  username: String,
  decks: [{ type: Types.ObjectId, ref: 'Deck' }],
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
