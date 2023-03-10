import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BudgetsModule } from '../app/budgets/budgets.module';
import { ClientsModule } from '../app/clients/clients.module';
import { ServicesModule } from '../app/services/services.module';
import { UsersModule } from '../app/users/users.module';

@Module({
  imports: [                
    MongooseModule.forRootAsync({
        imports: [ConfigModule.forRoot()],
        inject: [ConfigService],
        useFactory: async (config: ConfigService) => ({
          uri: config.get<string>('MONGODB_URI'),
      })
    }),
    BudgetsModule, 
    ServicesModule, 
    UsersModule, 
    ClientsModule,
    ],
   
})
  
export class AppModule {}
 //MongooseModule.forRoot('mongodb://127.0.0.1:27017/tcc')