import express from 'express';
import { verifyJwtToken } from '../middlewares/verifyToken.middleware';
import { verifyOtpController } from '../controllers/verifyOtp.controller';

const router = express();
router.post('/verifyOtp',verifyJwtToken,verifyOtpController);
export default router;