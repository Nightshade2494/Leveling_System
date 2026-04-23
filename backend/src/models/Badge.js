import mongoose from 'mongoose';

const badgeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    icon: { type: String, required: true },
    criteria: {
      type: String,
      enum: ['points', 'tasks', 'streak'],
      required: true
    },
    threshold: { type: Number, required: true }
  },
  { timestamps: true }
);

export default mongoose.model('Badge', badgeSchema);
