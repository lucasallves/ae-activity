import { Controller, Get, Query } from '@nestjs/common';
import { BusinessService } from './business.service';
import { IBusinessResponseDTO } from './dto/listReponse.dto';
import { IBusinessListQueryDTO } from './dto/listQuery.dto';
import { IBusinessLocationQueryDTO } from './dto/locationQuery.dto';

@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) { }

  @Get()
  findAll(@Query() query: IBusinessListQueryDTO): Promise<IBusinessResponseDTO> {
    return this.businessService.findAll(query);
  }

  @Get('/locations')
  aggregateLocations(@Query() query: IBusinessLocationQueryDTO): Promise<any> {
    return this.businessService.aggregateLocations(query);
  }
}
