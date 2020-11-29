import { Base } from '../base';
export class LLC extends Base {
  requiredDocuments = [
    'operating-agreement'
  ];

  createOperatingAgreementRevision(uploadFilename: string) {
  // gcp copy file to private bucket

    const documentTemplate = {
      id: 'rar',
      name: 'nevada-llc-operating-agreement'
    };

    const fileExtension = '.docx';
    const documentableTableName = 'matter_document';
    const documentTemplateId = documentTemplate.id;
    const filename = `/matters/${matterId}/operating-agreement`;
    try {


      this.databaseSession().query(`
    INSERT INTO document (file_extension, filename, documentable_table_name)
  `);
    } catch {

    }
  }
}
