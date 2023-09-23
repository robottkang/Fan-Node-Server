import mongoose, { Document, Schema } from 'mongoose';

export interface IDeck extends Document {
  name: string;
  data: object;
  owner: string; // 덱 소유자의 ID
}

const deckSchema = new Schema({
  name: String,
  data: Object,
  owner: String,
});

const Deck = mongoose.model<IDeck>('Deck', deckSchema);

export default Deck;
