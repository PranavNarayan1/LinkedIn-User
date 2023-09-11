import express from 'express';
import { userlogout } from '../controllers/user-logout.controller';
import { verifyJwtToken } from '../middlewares/verifyToken.middleware';

const router = express();
router.patch('/logout', verifyJwtToken,userlogout);
export default router;