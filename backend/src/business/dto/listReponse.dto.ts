import { Business } from '../business.schema';

export interface IBusinessResponseDTO {
  docs: Business[];
  total: number;
  limit: number;
  page?: number;
  pages?: number;
}