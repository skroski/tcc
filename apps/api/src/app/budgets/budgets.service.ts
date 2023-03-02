import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { Budget } from './entities/budget.entity';
import { BudgetRepository } from './repositories/budget.repository';

@Injectable()
export class BudgetsService {
  constructor(private readonly budgetRepository: BudgetRepository
  ) { }
  async create(newBudget: CreateBudgetDto): Promise<Budget> {
    const createdBudget = await this.budgetRepository.saveBudget(newBudget);
    return createdBudget;
  }

  async findAll(): Promise<Budget[]> {
    const allBudgets = await this.budgetRepository.getAllBudgets();

    if (!allBudgets.length)
      throw new BadRequestException('Não temos budgets registrados');
    else
      return allBudgets;
  }

  async findOne(budgetID: string): Promise<Budget> {
    try {
      const existBudget = await this.budgetRepository.getBudgetByID(budgetID);
      if (!existBudget)
        throw new BadRequestException(`Este serviço que tentou buscar não existe`);
      return existBudget;

    } catch (e) {
      throw new BadRequestException(`Este serviço que tentou buscar não existe`);

    }
  }

  async update(budgetID: string, newBudget: CreateBudgetDto): Promise<Budget> {

    const existBudget = await this.budgetRepository.getBudgetByID(budgetID);
    if (!existBudget)
      throw new BadRequestException(`Este serviço que tentou alterar não existe`);
    const updatedBudget = await this.budgetRepository.updateBudgetByID(budgetID, newBudget)
    if (updatedBudget)
      return this.budgetRepository.getBudgetByID(budgetID);
    else
      throw new BadRequestException("Tivemos um problema com a atualização do serviço")

  }

  async remove(budgetID: string): Promise<Budget> {
    try {
      const existBudget = await this.budgetRepository.deleteBudgetByID(budgetID);
      if (!existBudget)
        throw new BadRequestException(`Este serviço que tentou excluir não existe`);
      return existBudget;

    } catch (e) {
      throw new BadRequestException(`Este serviço que tentou excluir não existe`);

    }
  }
}
