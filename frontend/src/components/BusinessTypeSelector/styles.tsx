import styled from 'styled-components';
import colors from '../../theme/colors';

export const Container = styled.div`
  width: 100%;
`;

export const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: ${`1px solid ${colors.border}`};
`;

interface SelectorProps {
  active: boolean;
}
export const SelectorItem = styled.div`
  width: 50%;
  padding: 30px 0;
  color: ${({ active }: SelectorProps) => active ? colors.secondary : colors.text};
  background-color: ${({ active }: SelectorProps) => active ? colors.primary : colors.background};
  text-align: center;
  cursor: pointer;
`;
