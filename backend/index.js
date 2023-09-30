import express from 'express';
import dotenv from 'dotenv';
import taskRoutes from './routes/tasks.js';
import userRoutes from './routes/user.js';
import cors from 'cors';
import bodyParser  from 'body-parser';

// Follow this tutorial
// https://blog.logrocket.com/build-rest-api-node-express-mysql/

const app = express();
dotenv.config();

const port = process.env.PORT || 3001;
app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use('/tasks',taskRoutes);
app.use('/user',userRoutes);

app.get('/',(req,res)=>{
    res.send('running!!');
})
app.listen(port, ()=>{
console.log(`Listening on port ${port}`);
})