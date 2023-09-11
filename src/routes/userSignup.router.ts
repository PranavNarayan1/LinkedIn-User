import express from 'express';
import { newUserValidate } from '../middlewares/user.validations';
import { signupController } from '../controllers/user-signup.controller';
import { authMiddleware } from '../middlewares/basic-auth.middleware';


const router = express();
router.post('/signUp', authMiddleware, newUserValidate, signupController);

export default router;


