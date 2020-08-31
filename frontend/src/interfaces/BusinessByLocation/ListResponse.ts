import IBusiness from '../AllBusiness/index';

interface BusinessByLocationResponse {
  _id: string;
  detail: IBusiness;
  count: number;
}

export default BusinessByLocationResponse;
