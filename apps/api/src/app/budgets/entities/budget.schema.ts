import { Schema } from "mongoose";
import { ServiceSchema } from "../../services/entities/service.schema";


export const BudgetSchema = new Schema({
    title: String,
    services: [ServiceSchema],
    excerpt: String,
    description: String,
    totalhours: Number,
    totalprice: Number,
    type: String
});