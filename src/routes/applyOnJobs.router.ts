import express from 'express';
import { verifyJwtToken } from '../middlewares/verifyToken.middleware';
import { applyJobController } from '../controllers/user-action-controller/apply-job.controller';
const router = express();
router.post('/apply_job',verifyJwtToken,applyJobController);
export default router;