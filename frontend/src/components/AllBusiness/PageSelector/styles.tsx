import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import colors from '../../../theme/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 0 20px;
`;

interface PageNumberProps {
  active: boolean;
}
export const PageNumber = styled.span`
  padding: 20px 15px;
  font-size: 14px;
  text-align: center;
  cursor: ${({ active }: PageNumberProps) => active ? 'default' : 'pointer'};
  color: ${({ active }: PageNumberProps) => active ? colors.primary : colors.textGrey};
  pointer-events: ${({ active }: PageNumberProps) => active ? 'none' : 'unset'};
`;

interface NavLinkProps {
  disabled: boolean;
}
export const NavLink = styled.span`
  display: flex;
  align-items: center;
  color: ${colors.text};
  font-size: 14px;
  padding: 0 15px;
  cursor: ${({ disabled }: NavLinkProps) => disabled ? 'default' : 'pointer'};
  pointer-events: ${({ disabled }: NavLinkProps) => disabled ? 'none' : 'unset'};
  opacity: ${({ disabled }: NavLinkProps) => disabled ? '0.5' : '1'};
`;

export const PreviousIcon = styled(FaChevronLeft)`
  margin-right: 10px;
`;

export const NextIcon = styled(FaChevronRight)`
  margin-left: 10px;
`;
