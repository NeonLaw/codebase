export class Base {
  matterId: string;
  notarized: boolean;

  constructor(matterId: string, notarized?: string) {
    this.matterId = matterId;
    this.notarized = notarized || false;
  }

  uploadBucketUrl() {
    return 'r';
  }

  privateAssetBucketUrl() {
    return 'r';
  }

  databaseSession() {

  }

  createRetainerRevision() {
    const filename = `/matters/${this.matterId}/retainer`;
  }

  createSignedRetainer() {
    const filename = `/matters/${this.matterId}/signed-retainer`;
    const file_extension = 'pdf';
  }
}
