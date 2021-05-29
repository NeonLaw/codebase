from os import path
from avro.schema import parse

dir_path = path.dirname(path.realpath(__file__))


def test_outbound_email_schema():
    schema_file = f"{dir_path}/../src/outbound_emails/welcome_email.avsc"
    schema = parse(open(schema_file, "r").read())
    assert schema.props["type"] == "record"
    assert schema.props["name"] == "welcome_email"
