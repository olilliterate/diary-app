DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    id INT GENERATED ALWAYS AS IDENTITY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(100) UNIQUE NOT NULL,
    body VARCHAR(1500) UNIQUE NOT NULL,
    category VARCHAR(30),

    PRIMARY KEY (id)
);

INSERT INTO diary
    (name, body, category)
VALUES
    ('Test entry for our database', 'Today me (Ully) and Oliver made diary api for our hackathon.', 'Testing')