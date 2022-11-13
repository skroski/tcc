import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BudgetsModule } from '../budgets/budgets.module';
import { ClientsModule } from '../clients/clients.module';
import { ServicesModule } from '../services/services.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [                
    MongooseModule.forRoot(
       'mongodb+srv://daniel:T3U7k2T3PuczktGY@cluster0.7ojjg.mongodb.net/duplod?ssl=true&connectTimeoutMS=5000&maxPoolSize=50&retryWrites=true&w=majority', { useNewUrlParser : true, useUnifiedTopology: true }
     ), 
    //MongooseModule.forRoot('mongodb://127.0.0.1:27017/tcc'),
    BudgetsModule,
    ServicesModule, 
    UsersModule,
    ClientsModule,
  ],
})
export class AppModule {}
