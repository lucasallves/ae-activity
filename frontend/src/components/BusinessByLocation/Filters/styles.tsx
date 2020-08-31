import styled from 'styled-components';
import colors from '../../../theme/colors';
import { FaAngleDown } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterItem = styled.div`
  position: relative;
  margin-left: 20px;
`;

export const Label = styled.span`
  color: ${colors.textGrey};
  font-size: 14px;
  padding-right: 5px;
`;

export const Dropdown = styled.select`
  border-color: ${colors.primary};
  background-color: ${colors.background};
  border-radius: 4px;
  padding: 8px 25px 8px 8px;
  outline: none;
  color: ${colors.text};
  min-width: 125px;

  -webkit-appearance: none;
  -moz-appearance:    none;
  appearance:         none;
`;

export const DropdownArrow = styled(FaAngleDown)`
  position: absolute;
  top: 9px;
  right: 8px;
  pointer-events: none;
`;
