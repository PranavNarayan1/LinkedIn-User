import express from 'express';

import { verifyJwtToken } from '../middlewares/verifyToken.middleware';
import { forgetPasswordController } from '../controllers/forget-password.controller';

const router = express();
router.post('/forget-password',verifyJwtToken,forgetPasswordController);
export default router;