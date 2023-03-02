import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateBudgetDto } from "../dto/create-budget.dto";
import { Budget } from "../entities/budget.entity";


@Injectable()
export class BudgetRepository {

    constructor(
        @InjectModel('budgets') private readonly budgetModel: Model<Budget>
    ) { }
    async saveBudget(newBudget: CreateBudgetDto): Promise<Budget> {
        const createdBudget = new this.budgetModel(newBudget);
        return await createdBudget.save()
    }
    async getAllBudgets(): Promise<Budget[]> {
        return await this.budgetModel.find({}, { __v: false }).sort({ name: +1 }).exec();
    }
    async getBudgetByID(budgetID: string): Promise<Budget> {
        return this.budgetModel.findById({ _id: budgetID })
    }
    async deleteBudgetByID(budgetID: string): Promise<Budget> {
        return this.budgetModel.findOneAndDelete({ _id: budgetID })
    }
    async updateBudgetByID(budgetID: string, newBudget: CreateBudgetDto) {
        return await this.budgetModel.replaceOne({ _id: budgetID }, newBudget)
    }
   
}