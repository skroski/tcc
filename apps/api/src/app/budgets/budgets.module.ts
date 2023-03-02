import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BudgetsController } from './budgets.controller';
import { BudgetsService } from './budgets.service';
import { BudgetSchema } from './entities/budget.schema';
import { BudgetRepository } from './repositories/budget.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name : 'budgets', schema : BudgetSchema}])],
  controllers: [BudgetsController],
  providers: [BudgetsService, BudgetRepository]
})
export class BudgetsModule {}
