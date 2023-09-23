import express from 'express';
import { createDeck, getDecksByUser } from '../controllers/deckController';

const router = express.Router();

// 덱 생성 라우트
router.post('/deck', createDeck);

// 사용자의 덱 목록 조회 라우트
router.get('/decks/:userId', getDecksByUser);

export default router;
