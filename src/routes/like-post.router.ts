import express from 'express';
import { verifyJwtToken } from '../middlewares/verifyToken.middleware';
import { likePostController } from '../controllers/user-action-controller/like-post.controller';

const router = express();
router.get('/like_post/:postId',verifyJwtToken,likePostController);
export default router;