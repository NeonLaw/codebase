from diagrams import Diagram
from diagrams.programming.language import NodeJS
import os

dir_path = os.path.dirname(os.path.realpath(__file__))
web_images_path = f"{dir_path}/../../web/public/images"

with Diagram("Web on Vercel", filename=f"{web_images_path}/web_diagram"):
    NodeJS("Next.JS application")
