import mongoose from 'mongoose';
import { setServers } from 'node:dns/promises';

setServers(['1.1.1.1', '8.8.8.8']);
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error('Please define the MONGODB_URI environment variable');

declare global {
  var mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

const cached = global.mongooseCache || (global.mongooseCache = { conn: null, promise: null });

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false, family: 4 });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error('MongoDB connection error. Please make sure MongoDB is running. ' + e);
    throw e;
  }
  console.log('Connecting to:', process.env.MONGODB_URI);

  console.info('Connected to MongoDB');
  return cached.conn;
};
