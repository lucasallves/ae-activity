import React from 'react';
import IBusinessListQuery from '../../../interfaces/BusinessByLocation/ListQuery';
import { Container, FilterItem, Label, Dropdown, DropdownArrow } from './styles';

interface Props {
  filters: IBusinessListQuery;
  onChange: Function;
}

const BusinessByLocationsFilters: React.FC<Props> = ({ filters, onChange }) => {
  return (
    <Container>
      <FilterItem>
        <Label>Locations:</Label>

        <Dropdown
          value={filters.filter}
          onChange={(ev: React.ChangeEvent<HTMLSelectElement>): void => onChange(ev.target.value)}>

          <option value="MostLocations">Most Locations</option>
          <option value="LessLocations">Less Locations</option>
        </Dropdown>
        <DropdownArrow />
      </FilterItem>
    </Container>
  );
}

export default BusinessByLocationsFilters;
