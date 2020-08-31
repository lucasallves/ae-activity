import styled from 'styled-components';
import colors from '../../../theme/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 200px;
  padding: 25px;
  border-bottom: ${`1px solid ${colors.border}`};
`;

export const InfoContainer = styled.div`
  display: flex;
`;

export const Image = styled.img`
  display: block;
  width: 195px;
  height: auto;
  border-radius: 4px;
  margin-right: 15px;
`;

export const Title = styled.h4`
  color: ${colors.primary};
  font-size: 18px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  color: ${colors.textGrey};
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${colors.text};
`;

export const IconContainer = styled.span`
  padding-right: 5px;
  color: ${colors.primary};
  position: relative;
  top: 2px;
`;

export const LocationsCount = styled.span`
  font-size: 50px;
  color: ${colors.primary};
`;
