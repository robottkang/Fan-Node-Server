import { Request, Response } from 'express';
import Deck, { IDeck } from '../models/deck';
import User, { IUser } from '../models/user';

export const createDeck = async (req: Request, res: Response) => {
  try {
    const username = req.params.username;
    const { deckName, deckData } = req.body;

    // 덱 생성 및 연결
    const deck = new Deck({ name: deckName, data: deckData, owner: username });
    await deck.save();
    
    // 사용자의 덱 목록 업데이트
    const user = await User.findOne({ username: username });
    if (user) {
      user.decks.push(deck._id);
      await user.save();
    }

    res.status(201).json({ message: '덱이 생성되었습니다.' });
  } catch (error) {
    console.error('에러 발생:', error);
    res.status(500).json({ message: '서버 에러 발생' });
  }
};

export const getDecks = async (req: Request, res: Response) => {
  try {
    const username = req.params.username;

    // 사용자의 덱 목록 조회
    const user = await User.findOne({ username: username }).populate('decks');
    if (!user) {
      return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }

    const decks = user.decks as IDeck[];
    res.status(200).json(decks);
  } catch (error) {
    console.error('에러 발생:', error);
    res.status(500).json({ message: '서버 에러 발생' });
  }
};
