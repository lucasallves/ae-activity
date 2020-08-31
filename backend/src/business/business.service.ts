import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';
import { BusinessName, Business } from './business.schema';
import { IBusinessResponseDTO } from './dto/listReponse.dto';
import { IBusinessListQueryDTO } from './dto/listQuery.dto';
import { IBusinessLocationQueryDTO, FilterEnum } from './dto/locationQuery.dto';

@Injectable()
export class BusinessService {
  constructor(
    @InjectModel(BusinessName)
    private readonly businessModel: PaginateModel<Business>
  ) { }

  async findAll(query: IBusinessListQueryDTO): Promise<IBusinessResponseDTO> {
    return this.businessModel.paginate({}, { ...query, limit: parseInt(query.limit) });
  }

  async aggregateLocations(query: IBusinessLocationQueryDTO): Promise<any> {
    const order = query.filter === FilterEnum.MostLocations ? -1 : 1;

    return this.businessModel.aggregate(
      [
        { $limit: 100 },
        {
          $group: {
            _id: '$location_start_date',
            detail: {
              '$first': '$$ROOT'
            },
            count: { $sum: 1 },
          }
        },
        { $sort: { count: order } },
      ]
    );
  }
}
