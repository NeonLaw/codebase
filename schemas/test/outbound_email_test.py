from os import path
from logging import getLogger, DEBUG
from avro.schema import parse

dir_path = path.dirname(path.realpath(__file__))
logger = getLogger("outbound_email_test")
logger.setLevel(DEBUG)


def test_outbound_email_schema():
    schema_file = f"{dir_path}/../src/outbound_email.avsc"
    schema = parse(open(schema_file, "r").read())
    assert schema.props["type"] == "record"
    assert schema.props["name"] == "outbound_email"
