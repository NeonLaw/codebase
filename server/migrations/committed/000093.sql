--! Previous: sha1:5eafb788d49311e1c52617eef0c0e1fba5565319
--! Hash: sha1:8506c2573183be8e129381811bbef0969980b9b5

-- Enter migration here

CREATE SCHEMA IF NOT EXISTS accounting;
CREATE TABLE IF NOT EXISTS accounting.bills(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));
