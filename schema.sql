CREATE TABLE edu_course (
    ->   id integer PRIMARY KEY AUTO_INCREMENT,
    ->   title VARCHAR(255) NOT NULL,
    ->   contents TEXT NOT NULL,
    ->   created TIMESTAMP NOT NULL DEFAULT NOW()
    -> );

MariaDB [edu_course]> 
MariaDB [edu_course]> INSERT INTO edu_course (title, contents)
    -> VALUES
    -> ('Intro to Programming', 'A note about the course overview'),
    -> ('Database Systems', 'A note about relational models and SQL');