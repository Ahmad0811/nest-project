import * as mongoose from 'mongoose';

export const LikeSchema = new mongoose.Schema({
  post: { ref: 'Post', type: mongoose.Schema.Types.ObjectId },
  user: { ref: 'User', type: mongoose.Schema.Types.ObjectId },
  createdAt: { type: Date, default: Date.now },
});
