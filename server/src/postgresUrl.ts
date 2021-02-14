import 'dotenv/config';

export const postgresUrl = process.env.DATABASE_URL ||
  'postgres://postgres:password@postgres:5432/neon_law';

export const shadowPostgresUrl = process.env.SHADOW_DATABASE_URL ||
  'postgres://postgres:password@postgres:5432/neon_law_shadow';
