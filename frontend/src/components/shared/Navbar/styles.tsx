import styled from 'styled-components';
import colors from '../../../theme/colors';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: ${colors.background};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
  padding: 0 30px;
`;

export const SocialList = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialListItem = styled.a`
  color: ${colors.primary};
  font-size: 20px;
  margin-left: 15px;
`;
