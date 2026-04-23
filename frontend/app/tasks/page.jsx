'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import TaskCard from '../../components/TaskCard';
import api from '../../lib/api';
import AuthGuard from '../../components/AuthGuard';

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [xpFloat, setXpFloat] = useState(null);

  const fetchTasks = () => api.get('/tasks').then((res) => setTasks(res.data));

  useEffect(() => { fetchTasks().catch(() => null); }, []);

  const completeTask = async (id, points) => {
    await api.patch(`/tasks/${id}/complete`);
    setXpFloat(`+${points} XP`);
    setTimeout(() => setXpFloat(null), 1200);
    toast.success('Task completed!');
    fetchTasks();
  };

  return (
    <AuthGuard>
      <div className="space-y-4 relative">
      <Toaster />
      <h1 className="text-2xl font-bold">Tasks</h1>
      <AnimatePresence>
        {xpFloat && (
          <motion.div initial={{ y: 0, opacity: 0 }} animate={{ y: -40, opacity: 1 }} exit={{ opacity: 0 }} className="absolute right-4 top-10 text-neon font-bold">
            {xpFloat}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="space-y-3">
        {tasks.map((task) => <TaskCard key={task._id} task={task} onComplete={completeTask} />)}
      </div>
      </div>
    </AuthGuard>
  );
}
