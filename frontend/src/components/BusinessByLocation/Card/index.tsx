import React from 'react';
import { FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import IBusinessByLocationResponse from '../../../interfaces/BusinessByLocation/ListResponse';
import { titleize } from '../../../utils';
import { Container, InfoContainer, Image, Title, Description, Text, IconContainer, LocationsCount } from './styles';

interface Props {
  data: IBusinessByLocationResponse
}

const BusinessCard: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <InfoContainer>
        <Image src="/images/placeholder.jpg" />

        <div>
          {data.detail.primary_naics_description && <Description>{titleize(data.detail.primary_naics_description)}</Description>}
          <Title>{titleize(data.detail.business_name)}</Title>

          <Text>
            <IconContainer>
              <FaBuilding />
            </IconContainer>

            {titleize(data.detail.city)}
          </Text>

          <Text>
            <IconContainer>
              <FaMapMarkerAlt />
            </IconContainer>

            {titleize(data.detail.location_description)} - {data.detail.zip_code}
          </Text>

          <Text>
            NAICS: {data.detail.naics} - {data.detail.primary_naics_description}
          </Text>
        </div>
      </InfoContainer>

      <LocationsCount>{data.count}</LocationsCount>
    </Container>
  )
};

export default BusinessCard;
