import express  from 'express';
import { verifyJwtToken } from '../middlewares/verifyToken.middleware';
import { addProfilePictureController } from '../controllers/user-action-controller/addProfilePicture.controller';
import { upload } from '../middlewares/image-upload.middleware';
const router = express();
router.post('/add_profile_picture',verifyJwtToken,upload.single('photo'),addProfilePictureController);
export default router;
