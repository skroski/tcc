import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Client } from '../clients/entities/client.entity';
import { ClientSchema } from '../clients/entities/client.schema';
import { ServicesService } from './services.service';
import { ServiceSchema } from '../services/entities/service.schema'

describe('ServicesService', () => {
  let service: ServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(
          process.env.DATABASE_CONNECTION, { useNewUrlParser : true, useUnifiedTopology: true }
         ),
         MongooseModule.forFeature([ { name: 'services', schema: ServiceSchema}])
      ],
      providers: [
        ServicesService
      ],
    }).compile();

    service = module.get<ServicesService>(ServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
