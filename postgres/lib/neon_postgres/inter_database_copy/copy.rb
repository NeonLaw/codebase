require_relative "./document_template_copier"
require_relative "./matter_template_copier"
require_relative "./matter_copier"

NeonPostgres::InterDatabaseCopy::DocumentTemplateCopier.copy
NeonPostgres::InterDatabaseCopy::MatterTemplateCopier.copy
NeonPostgres::InterDatabaseCopy::MatterCopier.copy
