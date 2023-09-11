import express from 'express';
import { verifyJwtToken } from '../middlewares/verifyToken.middleware';
import { postPicsController } from '../controllers/user-action-controller/postMultioplePics.controllers';
import { upload } from '../middlewares/image-upload.middleware';
const router = express();
router.post('/post_multiple_picture',verifyJwtToken,upload.array('photos',10),postPicsController);
export default router;