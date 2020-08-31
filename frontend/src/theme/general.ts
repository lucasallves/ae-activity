import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const base = createGlobalStyle`
* {
  box-sizing: border-box;
}

html, body, #root {
  margin: 0;
  padding: 0;
  color: ${colors.text};
  background-color: #f1f1f1;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  width: 100%;
  height: 100%;
}
`;

export default base;
