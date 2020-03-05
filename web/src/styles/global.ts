import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  font-family: 'Apple SD Gothic Neo', AppleSDGothicNeo, 'Malgun Gothic', '맑은 고딕', sans-serif;
  letter-spacing: -0.2px;
  font-size: 14px;
  color: #1e1e1e;
  button, input {
    font-family: "Apple SD Gothic Neo", AppleSDGothicNeo, "Malgun Gothic", "맑은 고딕", sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #1e1e1e;
    padding: 0;
    letter-spacing: -0.2px;
  }
  a {
    cursor: pointer;
    color: #1e1e1e;
    text-decoration: none;
  }
  h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
`;

export default GlobalStyle;
