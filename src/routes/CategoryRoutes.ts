import express, {Router} from 'express';
import { CreateCategory,
} from '../controllers/CategoryController';
import {authenticate} from "../middleware/authMiddleware";

const router : Router = express.Router();


router.post("/create", CreateCategory);


export default router;