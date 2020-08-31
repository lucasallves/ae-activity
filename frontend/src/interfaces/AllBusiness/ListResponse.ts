import IBusiness from './index';

interface BusinessListResponse {
  docs: IBusiness[];
  limit: number;
  page: string;
  pages: number;
  total: number;
}

export default BusinessListResponse;
