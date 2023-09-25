import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  username: string;
  decks: string[]; // 유저 덱 목록
}

const userSchema = new Schema({
  username: String,
  decks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Deck' }],
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
