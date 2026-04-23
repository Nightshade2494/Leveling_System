import { Router } from 'express';
import { claimReward, getRewards } from '../controllers/rewardController.js';

const router = Router();
router.get('/', getRewards);
router.post('/:id/claim', claimReward);

export default router;
