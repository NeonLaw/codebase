# Neon Schemas

This is a package in Node and Ruby that contain schemas written in [Apache
Avro](https://avro.apache.org/docs/current/spec.html#schemas) for **all** of our
microservices.

This package can be included to guarantee correct publishing and subscribing of
messages from our message queue.

## Upgrading the GCP Schema

You can update the GCP Pub/Sub schema with the GCloud CLI.

```bash
gcloud config set project neon-law-staging # or neon-law-production

# list topics
gcloud pubsub topics list

# Add schema
gcloud beta pubsub schemas create outbound_email \
  --type=avro \
  --definition="$(cat ./src/outbound_email.avsc)"

# Create the outbound email topic
gcloud beta pubsub topics create outbound_email \
        --message-encoding=BINARY \
        --schema=outbound_email
# Create the dead-letter-queue outbound-email-topic
gcloud beta pubsub topics create outbound_email_dlq \
        --message-encoding=BINARY \
        --schema=outbound_email

# Create the subscription
gcloud pubsub subscriptions create outbound_email \
    --topic=outbound_email \
    --ack-deadline=30 \
    --dead-letter-topic=outbound_email_dlq \
    --max-delivery-attempts=10
```

## Schemas

* Outbound Emails
  * Welcome Email

## Developing

```bash
bundle
bundle exec guard
```
