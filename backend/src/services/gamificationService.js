import Badge from '../models/Badge.js';
import Task from '../models/Task.js';
import { levelFromPoints } from '../utils/calculateLevel.js';

export const applyTaskCompletionRewards = async (user, task) => {
  user.points += task.points;
  user.level = levelFromPoints(user.points);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (!user.lastCompletedDate) {
    user.streak = 1;
  } else {
    const last = new Date(user.lastCompletedDate);
    last.setHours(0, 0, 0, 0);
    const diffDays = Math.round((today - last) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) user.streak += 1;
    if (diffDays > 1) user.streak = 1;
  }

  user.lastCompletedDate = new Date();

  const tasksCompleted = await Task.countDocuments({ userId: user._id, completed: true });
  const badges = await Badge.find();

  for (const badge of badges) {
    const hasBadge = user.badges.some((id) => id.toString() === badge._id.toString());
    if (hasBadge) continue;

    const isUnlocked =
      (badge.criteria === 'points' && user.points >= badge.threshold) ||
      (badge.criteria === 'streak' && user.streak >= badge.threshold) ||
      (badge.criteria === 'tasks' && tasksCompleted >= badge.threshold);

    if (isUnlocked) user.badges.push(badge._id);
  }

  await user.save();
};
