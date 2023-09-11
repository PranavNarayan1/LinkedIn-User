import express from 'express';
import { verifyJwtToken } from '../middlewares/verifyToken.middleware';
import { seeRequestController } from '../controllers/user-action-controller/see-request.controller';

const router = express();
router.get('/see_all_pending_request',verifyJwtToken,seeRequestController);
export default router;