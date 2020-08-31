import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusinessName, BusinessSchema } from './business.schema';
import { BusinessService } from './business.service';
import { BusinessController } from './business.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: BusinessName, schema: BusinessSchema }])],
  providers: [BusinessService],
  controllers: [BusinessController]
})
export class BusinessModule { }
