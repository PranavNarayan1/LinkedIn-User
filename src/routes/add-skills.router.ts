import express from 'express';
import { verifyJwtToken } from '../middlewares/verifyToken.middleware';
import { addSkillsController } from '../controllers/user-action-controller/add-skills.controller';

const router = express();
router.post('/add_skills',verifyJwtToken,addSkillsController);
export default router;