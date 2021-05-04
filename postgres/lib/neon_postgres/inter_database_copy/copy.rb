require_relative "./document_template_copier"
require_relative "./matter_template_copier"
require_relative "./matter_copier"

NeonPostgres::InterDatabaseCopy::DocumentTemplateCopier.copy
NeonPostgres::InterDatabaseCopy::MatterTemplateCopier.copy
NeonPostgres::InterDatabaseCopy::MatterCopier.copy

# Add the admin test user as a lawyer matter contact to all matters
admin_id = NeonPostgres::Database.to_connection[:people]
  .where(email: "admin@sink.sendgrid.com").first.fetch(:id)

NeonPostgres::Database.to_connection[:matters].all.each do |matter|
  NeonPostgres::Database.to_connection[:matter_contacts].insert_conflict.insert(
    matter_id: matter.fetch(:id),
    contact_id: admin_id,
    role: 'lawyer'
  )
end
