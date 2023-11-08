import express, {Router} from 'express';
import {
    authenticateUser,
    getUserById,
    registerUser,
    updateUser,
    deleteUser,
    logoutUser,
} from '../controllers/UserConteroller';
import {authenticate} from "../middleware/authMiddleware";

const router : Router = express.Router();

router.get("/user/:id",authenticate, getUserById);
router.post("/register", registerUser);
router.post("/login", authenticateUser);
router.post("/logout", logoutUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;