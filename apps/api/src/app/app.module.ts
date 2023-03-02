import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BudgetsModule } from '../budgets/budgets.module';
import { ClientsModule } from '../clients/clients.module';
import { ServicesModule } from '../services/services.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [                
    MongooseModule.forRootAsync({
        imports: [ConfigModule.forRoot()],
        inject: [ConfigService],
        useFactory: async (config: ConfigService) => ({
          uri: config.get<string>('DATABASE_CONNECTION'),
      })
    })
    ,BudgetsModule, ServicesModule, UsersModule, ClientsModule,
    ],
   
})
  
export class AppModule {}
 //MongooseModule.forRoot('mongodb://127.0.0.1:27017/tcc'),
  //        BudgetsModule,
  //      ServicesModule, 
  //      UsersModule,
  //      ClientsModule,