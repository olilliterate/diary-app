DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    id INT GENERATED ALWAYS AS IDENTITY,
    entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(100) UNIQUE NOT NULL,
    entry VARCHAR(1500) UNIQUE NOT NULL,
    category VARCHAR(30),

    PRIMARY KEY (id)
);

INSERT INTO diary
    (name, entry, category)
VALUES
    ('Test entry for our database', 'Today me (Ully) and Oliver made diary api for our hackathon.', 'Testing')