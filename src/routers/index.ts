import express from 'express';
import { createDeck, getDecks } from '../controllers/deckController';

const router = express.Router();

// 덱 생성 라우트
router.post('/:username/deck', createDeck);

// 사용자의 덱 목록 조회 라우트
router.get('/:username/deck', getDecks);

export default router;
