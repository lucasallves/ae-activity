export class IBusinessListQueryDTO {
  page: number;
  limit: string;
  sort: 'location_start_date';
  order: 'ASC' | 'DESC';
}