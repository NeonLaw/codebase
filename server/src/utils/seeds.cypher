MATCH (a:Questionnaire),(b:Question)
WHERE a.name = 'Community Property' AND b.prompt = 'Character Evidence'
CREATE (a)-[r:NEXT_QUESTION { rule: "*" }]->(b)
RETURN type(r);

MATCH (a:Question),(b:Question)
WHERE a.prompt = 'Character Evidence' AND b.prompt = 'Non-Hearsay'
CREATE (a)-[r:NEXT_QUESTION { rule: "*" }]->(b)
RETURN type(r);

MATCH (a:Question),(b:Question)
WHERE a.prompt = 'Non-Hearsay' AND b.prompt = 'Hearsay Exception Unavailable Witness'
CREATE (a)-[r:NEXT_QUESTION { rule: "*" }]->(b)
RETURN type(r);
