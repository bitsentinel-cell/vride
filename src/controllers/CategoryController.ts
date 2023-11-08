import { Request, Response } from 'express';
import Category from "../models/Category";
import {Document} from "mongoose";
import {generateToken} from "../utils/auth";


interface ICategory extends Document {
    category: String;
}

const CreateCategory = async (req: Request, res: Response) => {
    const {category} : ICategory  = req.body;
    const categoryExists = await Category.findOne( {category} );

    if (categoryExists) {

        res.status(400).json({ message: "The category already exists" });
    }

    const categorySubmit : ICategory  = await Category.create({
        category
    });

    if (categorySubmit) {

        res.status(201).json({
            category: categorySubmit.category,
        });
    } else {
        res.status(400).json({ message: "An error occurred in creating the category" });
    }


};


export {
    CreateCategory,

}