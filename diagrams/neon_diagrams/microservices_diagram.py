from diagrams import Diagram
from diagrams.gcp.analytics import Pubsub
from diagrams.gcp.compute import Functions
from diagrams.gcp.database import SQL
from diagrams.gcp.storage import Storage
from diagrams.k8s.compute import Deploy
import os

dir_path = os.path.dirname(os.path.realpath(__file__))
web_images_path = f"{dir_path}/../../web/public/images"

with Diagram("Microservices", filename=f"{web_images_path}/microservices_diagram"):
    pub_sub = Pubsub("Message Broker")
    email_function = Functions("Email Function")
    slack_function = Functions("Slack Function")
    documents_function = Functions("Documents Function")
    cloud_storage = Storage("Private Documents")
    postgres = SQL("neon_law_postgres")
    deployment = Deploy("Graphile Worker")

    deployment >> postgres
    postgres >> deployment

    deployment >> pub_sub

    pub_sub >> email_function
    pub_sub >> slack_function
    pub_sub >> documents_function

    documents_function >> cloud_storage
