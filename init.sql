-- create the SQL code to create the table
-- so I can run this query:
-- INSERT INTO votes (uid, pollId, name, vote) VALUES (?, ?, ?, ?)

DROP TABLE IF EXISTS votes;

CREATE TABLE votes (
  uid VARCHAR(255) PRIMARY KEY,
  pollId VARCHAR(255),
  name VARCHAR(255),
  vote VARCHAR(255)
);

-- insert dummy value
INSERT INTO votes (uid, pollId, name, vote) VALUES ('1', 'react-meetup', 'John', 'yes');
