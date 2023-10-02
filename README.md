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
d) User is able to view a task.<br />

# Database used :: 
Mysql <br />

# External Library used:
bcryptjs-> for encrypting and decrypting the user password

# API used
URL is localhost or deployed url. <br />
<br />
GET: URL/tasks/?query=${creator}   Retrieve all the tasks for a creator. <br />
POST: URL/tasks/    Create a new task. <br />
DELETE: URL/tasks/${taskId}  Delete a task. <br />
PATCH: URL/tasks/${taskId}  Update a task. <br />

# Project Show
First Page
![image](https://github.com/maditya01/VE3TaskManagement/assets/60269271/1ba85027-2c32-4479-8f65-de1a5e8c8b25)

If already have an account
![image](https://github.com/maditya01/VE3TaskManagement/assets/60269271/1dd43a3b-5f10-4f7d-9fe8-2784904a0206)

After login
![image](https://github.com/maditya01/VE3TaskManagement/assets/60269271/e6521c0e-3630-4189-9ce5-72eaa722e663)

Create New Task page
![image](https://github.com/maditya01/VE3TaskManagement/assets/60269271/2e2df5d7-fd22-4833-accf-dc0f53517371)

After creating 2 tasks <br />
For each task there are total 3 icons Edit, Browse, Delete
![image](https://github.com/maditya01/VE3TaskManagement/assets/60269271/d96b03a0-47f6-45ff-b439-9eeb6fe3ccdf)

After clicking on the Browse icon
![image](https://github.com/maditya01/VE3TaskManagement/assets/60269271/698b8d62-cca9-4868-a4eb-bcdd4ce42388)

After clicking on the Edit icon <br />
previous data will be there if you want to change you can
![image](https://github.com/maditya01/VE3TaskManagement/assets/60269271/7d4ef403-3ba8-4cdf-af9c-6330949aff81)

Delete icon will delete the task.
