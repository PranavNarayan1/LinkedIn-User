import express from 'express';
import { verifyJwtToken } from '../middlewares/verifyToken.middleware';
import { acceptRequestController } from '../controllers/user-action-controller/accept-request.controller';

const router = express();
router.post('/accept_connection_request',verifyJwtToken,acceptRequestController);
export default router;