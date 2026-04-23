import Task from '../models/Task.js';

export const getProfile = async (req, res, next) => {
  try {
    const history = await Task.find({ userId: req.user._id, completed: true })
      .sort({ completedAt: -1 })
      .limit(20);

    await req.user.populate('badges');

    res.json({
      user: {
        id: req.user._id,
        username: req.user.username,
        email: req.user.email,
        points: req.user.points,
        level: req.user.level,
        streak: req.user.streak,
        badges: req.user.badges
      },
      history
    });
  } catch (error) {
    next(error);
  }
};
