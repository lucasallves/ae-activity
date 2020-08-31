import React from 'react';
import IBusinessListQuery from '../../../interfaces/AllBusiness/ListQuery';
import { Container, FilterItem, Label, Dropdown, DropdownArrow } from './styles';

interface Props {
  filters: IBusinessListQuery;
  onChange: Function;
}

const BusinessFilters: React.FC<Props> = ({ filters, onChange }) => {
  return (
    <Container>
      <FilterItem>
        <Label>Date:</Label>

        <Dropdown
          value={filters.order}
          onChange={(ev: React.ChangeEvent<HTMLSelectElement>): void => onChange({ ...filters, order: ev.target.value })}>

          <option value="DESC">Newest</option>
          <option value="ASC">Oldest</option>
        </Dropdown>
        <DropdownArrow />
      </FilterItem>
    </Container>
  );
}

export default BusinessFilters;
