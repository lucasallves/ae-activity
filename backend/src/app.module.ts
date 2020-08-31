import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessModule } from './business/business.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://lucas:lucas@cluster0.cgpqh.mongodb.net/aeactivity'),
    BusinessModule
  ]
})
export class AppModule { }
