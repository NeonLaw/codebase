from diagrams import Cluster, Diagram
from diagrams.custom import Custom
from diagrams.onprem.aggregator import Fluentd
from diagrams.k8s.compute import Deployment, Cronjob
from diagrams.k8s.network import Service, Ingress
from diagrams.k8s.ecosystem import Helm
from diagrams.programming.language import NodeJS, Ruby
from diagrams.onprem.database import PostgreSQL, Neo4J
from diagrams.onprem.queue import Kafka
from diagrams.gcp.network import LoadBalancing
from diagrams.onprem.network import Nginx
from diagrams.gcp.analytics import BigQuery
from diagrams.gcp.storage import Storage
from diagrams.elastic.elasticsearch import Elasticsearch
import os

dir_path = os.path.dirname(os.path.realpath(__file__))
web_images_path = f"{dir_path}/../../web/public/images"

with Diagram("Kubernetes", filename=f"{web_images_path}/k8s_diagram"):
    logflare = Custom("Logflare", f"{dir_path}/images/logflare.png")
    auth0 = Custom("Auth0", f"{dir_path}/images/auth0.png")

    with Cluster("Separate Staging GCP Project"):
        staging_postgres = PostgreSQL("GCP Staging Postgres")

    with Cluster("Separate Audit GCP Project"):
        audit_bucket = Storage("private_assets")

    with Cluster("Production GCP Project"):
        postgres = PostgreSQL("GCP Postgres")
        big_query = BigQuery("BigQuery")
        load_balancer = LoadBalancing("L7 Load Balancer")
        private_asset_bucket = Storage("private_assets")

        logflare >> big_query

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

                fluentd >> audit_bucket
                fluentd >> logflare
                fluentd >> Helm("Fluentd")

            with Cluster("Nginx"):
                nginx = Nginx("Nginx Ingress")
                nginx << Helm("Nginx")

            with Cluster("@neonlaw/api"):
                api_package = NodeJS("@neonlaw/api")
                api = (
                    api_package
                    << Deployment("@neonlaw/api")
                    << Service("@neonlawapigraphql")
                )

            with Cluster("neon_email"):
                email_package = Ruby("email")
                email_package << Deployment("Email")

            ingress = Ingress("Nginx")
            ingress >> nginx

            superset = Custom("Superset", f"{dir_path}/images/superset.png")

            with Cluster("@neonlaw/worker"):
                worker_package = NodeJS("@neonlaw/worker")
                worker = worker_package << Deployment("@neonlaw/worker")

            with Cluster("production to staging data transfer"):
                data_copy_package = Ruby("neon_email")
                data_copy = data_copy_package << Cronjob("2AM PST everyday")

            [api_package, nginx, superset] >> auth0
            [api_package, worker_package, email_package] >> fluentd
            [api_package, worker_package, data_copy_package] >> postgres
            [api_package, worker_package, data_copy_package] >> private_asset_bucket
            [worker_package, email_package, data_copy_package] >> kafka
            [api_package] >> neo4j
            [api_package] >> search
            superset >> [postgres, kafka, neo4j, search, big_query]
            nginx >> [api, superset]

            load_balancer >> ingress

            data_copy_package >> staging_postgres
