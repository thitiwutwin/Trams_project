import express from 'express';

import { getTram, updateTram } from '../controllers/data.js';

const router = express.Router();

router.get('/', getTram);
router.post('/', updateTram);

export default router;