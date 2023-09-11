import express from 'express';
import { verifyJwtToken } from '../middlewares/verifyToken.middleware';
import { resetPasswordControllers } from '../controllers/reset_password.controller';
const router = express();
router.post('/reset_password',verifyJwtToken,resetPasswordControllers);
export default router;