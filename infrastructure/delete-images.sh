#!/bin/bash

for image_name in $(gcloud container images list --repository us.gcr.io/$PROJECT_NAME); do
    for digest in $(gcloud container images list-tags $image_name --format=json | awk '/digest/{ print $2 }' | sed -e 's/^"//' -e 's/.\{2\}$//' | tail -n +6); do
      gcloud container images -q delete $image_name@$digest --force-delete-tags;
    done;
done;
