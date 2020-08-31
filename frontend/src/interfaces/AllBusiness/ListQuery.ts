interface BusinessListQuery {
  page: number;
  limit: number;
  sort: 'location_start_date';
  order: 'ASC' | 'DESC';
}

export default BusinessListQuery;
