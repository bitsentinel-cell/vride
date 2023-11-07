import express, { Application, Request, Response , Router } from 'express';
import mongoose from 'mongoose';

const app: Application = express();
const PORT: number = 8000;
import dotenv from "dotenv";
dotenv.config();


import userRoutes from './routes/UserRoutes'

app.use(express.json());
app.use('/api/v1', userRoutes);





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