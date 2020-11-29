import { Base } from '../src/base';
export class LLC extends Base {
  requiredDocuments = [
    'operating-agreement'
  ];

  createOperatingAgreementRevision(uploadFilename: string) {
    const documentTemplate = {
      id: 'rar',
      name: 'nevada-llc-operating-agreement'
    };

    const fileExtension = '.docx';
    const documentableTableName = 'matter_document';
    const documentTemplateId = documentTemplate.id;
    const filename = `/matters/${matterId}/operating-agreement`;

    try {
      // gcp copy file to private bucket

      this.databaseSession().query(`
    INSERT INTO document (file_extension, filename, documentable_table_name) ON CONFLICT target action
  `);
    } catch {

    }
  }
}
