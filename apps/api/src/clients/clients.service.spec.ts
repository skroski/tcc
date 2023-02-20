import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ClientsService } from './clients.service';
import { Client } from './entities/client.entity';
import { ClientSchema } from './entities/client.schema';

describe('ClientsService', () => {
  let service: ClientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(
          process.env.DATABASE_CONNECTION, { useNewUrlParser : true, useUnifiedTopology: true }
         ),
         MongooseModule.forFeature([ { name: Client.name, schema:ClientSchema}])
      ],
      providers: [
        ClientsService
      ],
    }).compile();

    service = module.get<ClientsService>(ClientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
