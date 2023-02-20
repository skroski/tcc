import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { BudgetsService } from './budgets.service';
import { BudgetRepository } from './repositories/budget.repository';
import { BudgetSchema } from './entities/budget.schema';

describe('BudgetsService', () => {
  let service: BudgetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(
          process.env.DATABASE_CONNECTION, { useNewUrlParser : true, useUnifiedTopology: true }
         ),
        MongooseModule.forFeature([{ name : 'budgets', schema : BudgetSchema}])],
      providers: [
        BudgetRepository,
        BudgetsService
      ],
    }).compile();

    service = module.get<BudgetsService>(BudgetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
