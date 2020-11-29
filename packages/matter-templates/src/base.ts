import { Client } from 'pg';

export class Base {
  matterId: string;

  constructor(matterId: string) {
    this.matterId = matterId;
  }

  uploadBucketUrl(): string {
    return process.env.GCP_UPLOAD_BUCKET as string;
  }

  privateAssetBucketUrl(): string {
    return process.env.GCP_PRIVATE_ASSET_BUCKET as string;
  }

  async databaseSession() {
    const client = new Client(process.env.DATABASE_URL);
    await client.connect();

    return client;
  }

  async isActive() {
    // check if signed-retainer exists
  }

  documents = [
    'retainer',
    'signed-retainer'
  ]
}
