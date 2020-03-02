import styled from 'styled-components';

const S = {
  HeaderWrapper: styled.div`
    height: 66px;
    width: 100%;
    position: fixed;
    top: 0;
    @media (min-width: 700px) {
      background-color: red;
    }
    @media (max-width: 700px) {
      background-color: blue;
    }
  `,
};

export default S;
