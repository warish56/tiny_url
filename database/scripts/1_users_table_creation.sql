
CREATE TABLE USERS (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(30) UNIQUE,
    phone VARCHAR(12) UNIQUE NOT NULL,
    max_url INT DEFAULT 5 NOT NULL
);

