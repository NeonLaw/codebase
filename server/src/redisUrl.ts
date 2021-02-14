import 'dotenv/config';

export const redisUrl = process.env.REDIS_URL || 'redis://redis:6379';
