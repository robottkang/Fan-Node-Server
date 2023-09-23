import { Request, Response } from 'express';
import Deck, { IDeck } from '../models/deck';
import User, { IUser } from '../models/user';

export const createDeck = async (req: Request, res: Response) => {
  try {
    const { userId, deckName, deckData } = req.body;

    // 사용자가 존재하는지 확인하고, 덱을 생성 및 연결
    const deck = new Deck({ name: deckName, data: deckData, owner: userId });
    await deck.save();

    // 사용자의 덱 목록 업데이트
    const user = await User.findById(userId);
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

export const getDecksByUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    // 사용자의 덱 목록 조회
    const user = await User.findById(userId).populate('decks');
    if (!user) {
      return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }

    const decks = user.decks;
    res.status(200).json(decks);
  } catch (error) {
    console.error('에러 발생:', error);
    res.status(500).json({ message: '서버 에러 발생' });
  }
};
