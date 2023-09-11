import express from 'express';
import { verifyJwtToken } from '../middlewares/verifyToken.middleware';
import { sendConnectionRequestController } from '../controllers/user-action-controller/send-connection-request.controller';

const router = express();
router.post('/send_connection_request',verifyJwtToken, sendConnectionRequestController);
export default router;