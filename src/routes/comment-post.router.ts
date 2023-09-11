import express from 'express';
import { verifyJwtToken } from '../middlewares/verifyToken.middleware';
import { addCommentController } from '../controllers/user-action-controller/comments-post.controller';

const router = express();
router.post('/add_comment',verifyJwtToken,addCommentController);
export default router;