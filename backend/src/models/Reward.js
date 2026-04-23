import mongoose from 'mongoose';

const rewardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    cost: { type: Number, required: true },
    type: { type: String, enum: ['bonus', 'redeem'], default: 'bonus' },
    active: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model('Reward', rewardSchema);
