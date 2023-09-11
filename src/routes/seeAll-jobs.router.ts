import express from 'express';
import { verifyJwtToken } from '../middlewares/verifyToken.middleware';
import { seeAllJobsControllers } from '../controllers/user-action-controller/seeAllReleventJobs.controllers';
const router = express();
router.get('/see_all_relevent_jobs',verifyJwtToken,seeAllJobsControllers);
export default router;