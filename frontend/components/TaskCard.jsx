'use client';

import { motion } from 'framer-motion';

export default function TaskCard({ task, onComplete }) {
  return (
    <motion.div layout className="card flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-xs text-slate-400">{task.type} · {task.points} XP</p>
      </div>
      <button
        disabled={task.completed}
        onClick={() => onComplete(task._id, task.points)}
        className="px-3 py-2 rounded-lg bg-neon/20 hover:bg-neon/30 disabled:opacity-40"
      >
        {task.completed ? 'Done' : 'Complete'}
      </button>
    </motion.div>
  );
}
