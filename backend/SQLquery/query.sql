
CREATE TABLE tasks (
    taskId INT NOT NULL AUTO_INCREMENT,
    taskCreator VARCHAR(55) NOT NULL,
    taskTitle VARCHAR(255) NOT NULL,
    taskMessage VARCHAR(65000) NOT NULL,
    PRIMARY KEY (taskId)
);

CREATE TABLE users (
   userId INT NOT NULL AUTO_INCREMENT,
   username VARCHAR(50) NOT NULL,
   useremail VARCHAR(50) NOT NULL UNIQUE,
   userpassword VARCHAR(50) NOT NULL,
   PRIMARY KEY (userId)
);