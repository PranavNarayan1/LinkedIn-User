import express from 'express';
import { verifyJwtToken } from '../middlewares/verifyToken.middleware';
import { createPost } from '../controllers/user-action-controller/create-post.controller';

const router = express();
router.post('/create_post',verifyJwtToken,createPost);
export default router;