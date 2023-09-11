import express from 'express';
import { verifyEmail } from '../controllers/verify-email.controller';

const router = express();
router.get('/verifyUserEmail/:token',verifyEmail);
export default router;