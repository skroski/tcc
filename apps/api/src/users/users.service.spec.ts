import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ServiceSchema } from '../services/entities/service.schema';
import { UsersService } from './users.service';
import { UserSchema } from '../services/entities/user.schema';
import { User } from './entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(
          process.env.DATABASE_CONNECTION, { useNewUrlParser : true, useUnifiedTopology: true }
         ),
         MongooseModule.forFeature([ { name: User.name, schema:UserSchema}]),
      ],
      providers: [
        UsersService
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
