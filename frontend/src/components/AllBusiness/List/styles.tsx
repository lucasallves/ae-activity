import styled from 'styled-components';
import colors from '../../../theme/colors';

export const Container = styled.div`
  width: 100%;
  border-radius: 3px;
  background-color: ${colors.background};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  border-bottom: ${`1px solid ${colors.border}`};
`;

export const Title = styled.h2`
  font-size: 18px;
  color: ${colors.text};
`;

export const Body = styled.div`
  width: 100%;
`;
