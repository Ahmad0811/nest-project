import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true, maxlength: 250 },
  user: { ref: 'User', type: mongoose.Schema.Types.ObjectId },
  createdAt: { type: Date, default: Date.now },
});
