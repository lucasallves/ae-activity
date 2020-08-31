import api from './api';
import IBusiness from '../interfaces/AllBusiness';
import IBusinessListQuery from '../interfaces/AllBusiness/ListQuery';
import IBusinessByLocationQuery from '../interfaces/BusinessByLocation/ListQuery';

class BusinessService {
  static getPage(params: IBusinessListQuery): Promise<IBusiness[]> {
    return api.get('/business', { params });
  }

  static geBusinessByLocation(params: IBusinessByLocationQuery) {
    return api.get('/business/locations', { params });
  }
}

export default BusinessService;
