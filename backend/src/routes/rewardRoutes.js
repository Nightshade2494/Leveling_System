import { Router } from 'express';
import { claimReward, claimRewardByBody, getRewards } from '../controllers/rewardController.js';

const router = Router();
router.get('/', getRewards);
router.post('/claim', claimRewardByBody);
router.post('/:id/claim', claimReward);

export default router;
