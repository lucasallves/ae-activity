import React from 'react';
import { FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import IBusiness from '../../../interfaces/AllBusiness';
import { titleize } from '../../../utils';
import { Container, Image, Title, Description, Text, IconContainer } from './styles';

interface Props {
  data: IBusiness
}

const BusinessCard: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Image src="/images/placeholder.jpg" />

      <div>
        {data.primary_naics_description && <Description>{titleize(data.primary_naics_description)}</Description>}
        <Title>{titleize(data.business_name)}</Title>

        <Text>
          <IconContainer>
            <FaBuilding />
          </IconContainer>

          {titleize(data.city)}
        </Text>

        <Text>
          <IconContainer>
            <FaMapMarkerAlt />
          </IconContainer>

          {titleize(data.location_description)} - {data.zip_code}
        </Text>

        <Text>
          NAICS: {data.naics} - {data.primary_naics_description}
        </Text>
      </div>
    </Container>
  )
};

export default BusinessCard;
