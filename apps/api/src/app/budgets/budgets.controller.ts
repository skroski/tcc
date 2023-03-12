import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BudgetsService } from './budgets.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { Budget } from './entities/budget.entity';

@Controller('budgets')
@ApiTags('budgets')
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {}


  @Post()
  @ApiOperation({ summary: 'Criação de Orçamento' })
  @ApiResponse({ status: 200, description: 'Insere um Orçamento' })
  @ApiResponse({ status: 404, description: 'Orçamento não foi inserido.' })
  create(@Body() createBudgetDto: CreateBudgetDto) {
    return this.budgetsService.create(createBudgetDto);
  }

  @Get()
  @ApiOperation({ summary: 'Consulta de todos os Orçamentos' })
  @ApiResponse({ status: 200, description: 'Consulta de todos os Orçamentos.' })
  @ApiResponse({ status: 404, description: 'Orçamentos não encontrados.' })
  async findAll(): Promise<Budget[]> {
    return await this.budgetsService.findAll();
  }

  @Get(':budgetID')
  @ApiOperation({ summary: 'Consulta de Orçamento por ID' })
  @ApiResponse({ status: 200, description: 'Consulta de Orçamento por ID.' })
  @ApiResponse({ status: 404, description: 'Orçamento não encontrado.' })
  async findOne(@Param('budgetID') budgetID: string) {
    return await this.budgetsService.findOne(budgetID);
  }


  @Patch(':budgetID')
  @ApiOperation({ summary: 'Alteração de Orçamento' })
  @ApiResponse({ status: 200, description: 'Alteração de Orçamento .' })
  @ApiResponse({ status: 404, description: 'Não foi possível alterar o Orçamento.' })
  async update(@Param('budgetID') budgetID : string, @Body() newService : CreateBudgetDto): Promise<Budget> {
    return await this.budgetsService.update(budgetID, newService);
}

  @Delete(':budgetID')
  @ApiOperation({ summary: 'Exlusão de Orçamento' })
  @ApiResponse({ status: 200, description: 'Exclusão de Orçamento.' })
  @ApiResponse({ status: 404, description: 'Orçamento não exlcuido.' })
  remove(@Param('budgetID') budgetID: string) {
    return this.budgetsService.remove(budgetID);
  }
}
