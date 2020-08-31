import React, { useEffect, useState } from 'react';

import IBusiness from '../../../interfaces/AllBusiness';
import IBusinessListQuery from '../../../interfaces/AllBusiness/ListQuery';
import IBusinessListResponse from '../../../interfaces/AllBusiness/ListResponse';
import BusinessService from '../../../services/Business';

import Filters from '../Filters';
import Card from '../Card';
import PageSelector from '../PageSelector';
import Spinner from '../../shared/Spinner';
import { Container, Header, Title, Body } from './styles';

const BusinessList: React.FC = () => {
  const [list, setList] = useState<IBusiness[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filters, setFilters] = useState<IBusinessListQuery>({
    page: 1,
    limit: 30,
    sort: 'location_start_date',
    order: 'DESC'
  });

  useEffect(() => {
    async function getPage(): Promise<IBusinessListResponse> {
      setLoading(true);
      const { data }: any = await BusinessService.getPage(filters);
      setList(data.docs);
      setLoading(false);
      return data;
    }

    getPage();
  }, [filters]);

  function onFiltersChange(updatedFilters: IBusinessListQuery): void {
    setFilters({ ...updatedFilters, page: 1 });
  }

  function onPageChange(n: number) {
    window.scrollTo(0, 0);
    setFilters({ ...filters, page: n });
  }

  return (
    <Container>
      <Header>
        <Title>Business List</Title>
        <Filters filters={filters} onChange={onFiltersChange} />
      </Header>

      {
        <Body>
          {loading && <Spinner />}
          {!loading && list.map(item => <Card data={item} key={item.location_account} />)}
        </Body>
      }

      <PageSelector activePage={filters.page} onChange={onPageChange} />
    </Container>
  );
}

export default BusinessList;
