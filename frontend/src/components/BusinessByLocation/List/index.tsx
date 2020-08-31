import React, { useState, useEffect } from 'react';

import IBusinessByLocationQuery from '../../../interfaces/BusinessByLocation/ListQuery';
import IBusinessByLocationResponse from '../../../interfaces/BusinessByLocation/ListResponse';

import Filters from '../Filters';
import Card from '../Card';
import Spinner from '../../shared/Spinner';
import BusinessService from '../../../services/Business';
import { Container, Header, Title, Body } from './styles';

const BusinessByLocationList: React.FC = () => {
  const [list, setList] = useState<IBusinessByLocationResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [locationFilter, setLocationFilter] = useState<IBusinessByLocationQuery>({
    filter: 'MostLocations'
  });

  useEffect(() => {
    async function geBusinessByLocation(): Promise<IBusinessByLocationResponse> {
      setLoading(true);
      const { data }: any = await BusinessService.geBusinessByLocation(locationFilter);
      setList(data);
      setLoading(false);
      return data;
    }

    geBusinessByLocation();
  }, [locationFilter]);

  function onFiltersChange(updatedFilter: string) {
    setLocationFilter({ ...locationFilter, filter: updatedFilter });
  }

  return (
    <Container>
      <Header>
        <Title>Business By Location</Title>
        <Filters filters={locationFilter} onChange={onFiltersChange} />
      </Header>

      {
        <Body>
          {loading && <Spinner />}
          {!loading && list.map(item => <Card data={item} key={item._id} />)}
        </Body>
      }
    </Container>
  );
}

export default BusinessByLocationList;
