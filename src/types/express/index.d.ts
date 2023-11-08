import express from "express";
import {Document} from "mongoose";

// declare global {
//     namespace Express {
//         interface Request {
//             user?: Record<string,any>
//
//         }
//     }
// }

interface UserBasicInfo {
    _id: string;
    name: string;
    email: string;
}

interface ICategory extends Document {
    category: String;


}


declare global {
    namespace Express {
        interface Request {
            user?: UserBasicInfo | null;
            category?: ICategory | null;
        }
    }
}