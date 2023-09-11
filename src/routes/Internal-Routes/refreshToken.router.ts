import express from 'express';
import { refreshTokenVerify } from '../../controllers/Internal-Controller/refreshToken.controller';

const router = express();
router.post('/refresh', refreshTokenVerify);
export default router;