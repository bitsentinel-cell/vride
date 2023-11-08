import mongoose, { Document, Schema } from "mongoose";

export interface ICategory extends Document {
    category: String;


}

const categorySchema = new Schema<ICategory>({
    category: {
        type: String,
        required: true,
    },

});
const Category = mongoose.model("Category", categorySchema);


export default Category;