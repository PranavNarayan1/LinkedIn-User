import express from'express';
import { authMiddleware } from '../middlewares/basic-auth.middleware';
import { validateLoginUsingEmail } from '../middlewares/user.validations';
import { loginUsingMail } from '../controllers/user-login.controller';

const router = express();
router.post('/login-using-email', authMiddleware, validateLoginUsingEmail, loginUsingMail);

export default router;