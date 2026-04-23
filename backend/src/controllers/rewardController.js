import Reward from '../models/Reward.js';

export const getRewards = async (req, res, next) => {
  try {
    const rewards = await Reward.find({ active: true }).sort({ cost: 1 });
    res.json(rewards);
  } catch (error) {
    next(error);
  }
};

export const claimReward = async (req, res, next) => {
  try {
    const reward = await Reward.findById(req.params.id);
    if (!reward || !reward.active) return res.status(404).json({ message: 'Reward not found' });
    if (req.user.points < reward.cost) return res.status(400).json({ message: 'Not enough points' });

    req.user.points -= reward.cost;
    await req.user.save();

    res.json({ message: `Claimed ${reward.name}`, points: req.user.points });
  } catch (error) {
    next(error);
  }
};
