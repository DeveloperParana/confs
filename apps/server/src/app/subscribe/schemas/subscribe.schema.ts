import * as mongoose from 'mongoose';

export const SubscribeSchema = new mongoose.Schema(
  {
    email: String,
    id: Number,
    name: String,
    username: String,
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);
