import Reward from '../models/Reward.js';

export const getRewards = async (req, res, next) => {
  try {
    const rewards = await Reward.find({ active: true }).sort({ cost: 1 });
    res.json(rewards);
  } catch (error) {
    next(error);
  }
};

const claim = async (req, res, next, rewardId) => {
  try {
    if (!rewardId) return res.status(400).json({ message: 'Reward ID is required' });

    const reward = await Reward.findById(rewardId);
    if (!reward || !reward.active) return res.status(404).json({ message: 'Reward not found' });
    if (req.user.points < reward.cost) return res.status(400).json({ message: 'Not enough points' });

    req.user.points -= reward.cost;
    await req.user.save();

    res.json({ message: `Claimed ${reward.name}`, points: req.user.points });
  } catch (error) {
    next(error);
  }
};

export const claimReward = async (req, res, next) => claim(req, res, next, req.params.id);

export const claimRewardByBody = async (req, res, next) => claim(req, res, next, req.body.rewardId);
