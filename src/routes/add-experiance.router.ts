import express from 'express';
import { verifyJwtToken } from '../middlewares/verifyToken.middleware';
import { addExperianceController } from '../controllers/user-action-controller/add-experiance.controller';

const router = express();
router.post('/add_experiance',verifyJwtToken,addExperianceController);
export default router;