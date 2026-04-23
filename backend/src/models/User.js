import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true, minlength: 3 },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    points: { type: Number, default: 0 },
    level: { type: Number, default: 1 },
    streak: { type: Number, default: 0 },
    lastCompletedDate: { type: Date },
    badges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Badge' }]
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
