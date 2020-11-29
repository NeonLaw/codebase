import { Client } from 'pg';

interface ProcessUploadArgs {
  filename: string;
  documentTemplateName: string;
  overwrite?: boolean;
}

export class Base {
  matterId: string;
  notarized: boolean;

  constructor(matterId: string, notarized?: boolean) {
    this.matterId = matterId;
    this.notarized = notarized || false;
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

  async createRetainerRevision(filename: string) {
    await this.processUpload(
      {
        documentTemplateName: 'retainer',
        fileExtension: 'doc',
        filename,
        overwrite: true
      }
    );
  }

  async createSignedRetainer(filename: string) {
    await this.processUpload(
      {
        documentTemplateName: 'signed-retainer',
        fileExtension: 'pdf',
        filename
      }
    );
  }

  async saveUpload(args: ProcessUploadArgs) {
  }

  async getMatterDocument(filename: string) {
  }

  async isActive() {
    // check if signed-retainer exists
  }

  allowableDocumentTemplateNames = [
    'retainer',
    'signed-retainer'
  ]
}
