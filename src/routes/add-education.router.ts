import express from 'express';
import { verifyJwtToken } from '../middlewares/verifyToken.middleware';
import { addEducationController } from '../controllers/user-action-controller/add-education.controller';

const router = express();
router.post('/add_education',verifyJwtToken,addEducationController);
export default router;