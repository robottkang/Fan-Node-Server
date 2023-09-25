import mongoose, { Document, Schema } from 'mongoose';

export interface IDeck extends Document {
  name: string;
  data: object[]; // 카드 데이터들
  owner: string;  // 덱 소유자의 이름
}

const deckSchema = new Schema({
  name: String,
  data: [Object],
  owner: String,
});

const Deck = mongoose.model<IDeck>('Deck', deckSchema);

export default Deck;
