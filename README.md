# VE3TaskManagement
VE3 Task Management Task
# How to run this project
Create a Database (Dummy DataBase Provided) in Mysql. <br />
Then run npm install in the backend folder and then node index.js <br /> 
After that run npm install in the frontend folder and then run npm start.

# Features implemented
a) User is able to signup, login, and logout.<br />
b) User is able to create a task that has a title and message. <br />
c) User is able to delete and update a task. <br />

# Database used :: 
Mysql <br />

# External Library used:
bcryptjs-> for encrypting and decrypting the user password

# API used
URL is localhost or deployed url. <br />
<br />
GET: URL/tasks/?query=${creator}   Retrieve all the tasks for a creator. <br />
POST: URL/tasks/    Create a new Post. <br />
DELETE: URL/tasks/${taskId}  Delete a task. <br />
PATCH: URL/tasks/${taskId}  Update a task. <br />

