import React, { useState } from 'react';
import AllBusinessList from '../AllBusiness/List';
import BusinessByLocationList from '../BusinessByLocation/List';
import { Container, SelectorContainer, SelectorItem } from './styles';

const TypeSelector: React.FC = () => {
  const [type, setType] = useState<string>('all');

  return (
    <Container>
      <SelectorContainer>
        <SelectorItem
          active={type === 'all'}
          onClick={() => setType('all')}>
          All Businesses
        </SelectorItem>

        <SelectorItem
          active={type === 'location'}
          onClick={() => setType('location')}>
          Businesses By Location
        </SelectorItem>
      </SelectorContainer>

      {type === 'all' && <AllBusinessList />}
      {type === 'location' && <BusinessByLocationList />}
    </Container>
  );
}

export default TypeSelector;
