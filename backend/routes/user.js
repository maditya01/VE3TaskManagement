import express from 'express';
import { signinUser, signupUser } from '../controllers/user.js';
const router = express.Router();

router.post('/signup', signupUser)
router.post('/signIn', signinUser);


export default router;