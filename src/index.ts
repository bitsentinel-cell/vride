import express, { Application, Request, Response , Router } from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
const app: Application = express();
const PORT: number = 8000;
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import userRoutes from './routes/UserRoutes'
import helmet from "helmet";
import { errorHandler } from "./middleware/errorMiddleware";
import { authenticate } from './middleware/authMiddleware';


app.use(helmet());
// ***** cors instaled for ui ***** //
//
// import cors from "cors";
//
// app.use(
//     cors({
//         origin: "http://localhost:3000",
//         credentials: true,
//     })
// );

interface UserBasicInfo {
    _id: string;
    name: string;
    email: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: UserBasicInfo | null;
        }
    }
}


app.use(cookieParser());
app.use(bodyParser.json());

app.use(express.json());
app.use('/api/v1', userRoutes);



app.use(errorHandler);



// database connection for vride
const uri = process.env.MONGOLAB_URI;
async function connect() : Promise<void>{
    try {
        // @ts-ignore
        await mongoose.connect(uri);
        console.log("connected to MongoDB");
    }
    catch {
        console.log('not connected');
    }
}
connect();


app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});