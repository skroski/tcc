import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { Budget } from './entities/budget.entity';

@Controller('budgets')
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {}


  @Post()
  create(@Body() createBudgetDto: CreateBudgetDto) {
    return this.budgetsService.create(createBudgetDto);
  }

  @Get()
  async findAll(): Promise<Budget[]> {
    return await this.budgetsService.findAll();
  }

  @Get(':budgetID')
  async findOne(@Param('budgetID') budgetID: string) {
    return await this.budgetsService.findOne(budgetID);
  }


  @Patch(':budgetID')
  async update(@Param('budgetID') budgetID : string, @Body() newService : CreateBudgetDto): Promise<Budget> {
    return await this.budgetsService.update(budgetID, newService);
}

  @Delete(':budgetID')
  remove(@Param('budgetID') budgetID: string) {
    return this.budgetsService.remove(budgetID);
  }
}
