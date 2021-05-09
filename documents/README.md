# Neon Documents

This gem is used to listen to document messages in Kafka and then interact with
the GCP Storage API.

## Necessary API Keys and environment variables.

* Kafka URL - Where to consume document message
* Postgres URL - The PostgreSQL URL for connecting
* GCP Credentials - A GCP Key JSON for a service account with access to the
  UNPROCESSED_DOCUMENTS_BUCKET and the PRIVATE_DOCUMENT_BUCKET
* UNPROCESSED_DOCUMENTS_BUCKET - the GCP bucket name for unprocessed documents
* PRIVATE_DOCUMENT_BUCKET - the GCP bucket for processed, private documents

## Contributing

Bug reports and pull requests are welcome on GitHub at
https://github.com/neonlaw/codebase.
