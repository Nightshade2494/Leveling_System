import User from '../models/User.js';

export const getLeaderboard = async (req, res, next) => {
  try {
    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 10);
    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      User.find({}, 'username points level streak badges').sort({ points: -1 }).skip(skip).limit(limit).populate('badges'),
      User.countDocuments()
    ]);

    res.json({ page, total, totalPages: Math.ceil(total / limit), users });
  } catch (error) {
    next(error);
  }
};
