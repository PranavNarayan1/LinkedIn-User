import express from 'express';
import { verifyJwtToken } from '../middlewares/verifyToken.middleware';
import { addCurrentDesignationController } from '../controllers/user-action-controller/addCurrentDesignation.controller';
const router = express();
router.post('/add_current_designation',verifyJwtToken,addCurrentDesignationController);
export default router;