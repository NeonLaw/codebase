kubectl apply -f https://download.elastic.co/downloads/eck/1.5.0/all-in-one.yaml

cat <<EOF | kubectl apply -f -
apiVersion: elasticsearch.k8s.elastic.co/v1
kind: Elasticsearch
metadata:
  name: search
spec:
  version: 7.12.0
  nodeSets:
  - name: default
    count: 1
    config:
      node.store.allow_mmap: false
EOF
