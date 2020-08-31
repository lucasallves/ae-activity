import styled from 'styled-components';
import colors from '../../../theme/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px 0;

  .spinner-icon svg {
    stroke: ${colors.primary};
    width: 60px;
    height: 60px;
  }
`;
