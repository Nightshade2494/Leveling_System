import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: '' },
    type: {
      type: String,
      enum: ['daily', 'weekly', 'one-time'],
      default: 'one-time'
    },
    points: { type: Number, default: 10 },
    completed: { type: Boolean, default: false },
    completedAt: Date,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

export default mongoose.model('Task', taskSchema);
