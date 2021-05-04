from diagrams import Cluster, Diagram
from diagrams.custom import Custom
from diagrams.onprem.aggregator import Fluentd
from diagrams.k8s.compute import Deployment, Cronjob
from diagrams.k8s.network import Service, Ingress
from diagrams.k8s.ecosystem import Helm
from diagrams.programming.language import NodeJS, Ruby
from diagrams.onprem.database import PostgreSQL, Neo4J
from diagrams.onprem.queue import Kafka
from diagrams.onprem.network import Nginx
from diagrams.gcp.analytics import BigQuery
from diagrams.elastic.elasticsearch import Elasticsearch
import os

dir_path = os.path.dirname(os.path.realpath(__file__))
web_images_path = f"{dir_path}/../../web/public/images"

with Diagram("Kubernetes", filename=f"{web_images_path}/k8s_diagram"):

    postgres = PostgreSQL("GCP Postgres")
    staging_postgres = PostgreSQL("GCP Staging Postgres")
    big_query = BigQuery("BigQuery")
    logflare = Custom("Logflare", f"{dir_path}/images/logflare.png")

    with Cluster("GKE"):
        with Cluster("Kafka"):
            kafka = Kafka("Kafka")
            kafka << Helm("Confluent")

        with Cluster("Neo4j"):
            neo4j = Neo4J("Neo4j")
            neo4j << Helm("Neo4j")

        with Cluster("Elastic"):
            search = Elasticsearch("Elasticsearch")

        with Cluster("Fluentd"):
            fluentd = Fluentd("Fluentd")

            fluentd >> logflare
            fluentd >> Helm("Fluentd")

        with Cluster("Nginx"):
            nginx = Nginx("Nginx Ingress")
            nginx << Helm("Nginx")

        with Cluster("@neonlaw/api"):
            api_package = NodeJS("@neonlaw/graphql")
            api = (
                api_package
                << Deployment("@neonlaw/graphql")
                << Service("@neonlaw/graphql")
            )

        with Cluster("neon_email"):
            email_package = Ruby("email")
            email_package << Deployment("Email")

        ingress = Ingress("Nginx")
        ingress >> nginx

        superset = Custom("Superset", f"{dir_path}/images/superset.png")

        worker_package = NodeJS("@neonlaw/worker")
        worker = worker_package << Deployment("@neonlaw/worker")

        data_copy_package = Ruby("neon_postgres (data copy)")
        data_copy = data_copy_package << Cronjob("2AM PST everyday")

        [api_package, worker_package, email_package] >> fluentd
        [api_package, worker_package, data_copy_package] << postgres
        [worker_package, email_package, data_copy_package] << kafka
        [api_package] << neo4j
        [api_package] << search
        superset << [postgres, kafka, neo4j, search, big_query]
        ingress >> [api, superset]

        data_copy_package >> staging_postgres
