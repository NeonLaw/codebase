from diagrams import Diagram
from diagrams.custom import Custom
import os

dir_path = os.path.dirname(os.path.realpath(__file__))
web_images_path = f"{dir_path}/../../web/public/images"

with Diagram("Web on Vercel", filename=f"{web_images_path}/web_diagram"):
    vercel = Custom("Vercel", f"{dir_path}/images/vercel.png")

    vercel
