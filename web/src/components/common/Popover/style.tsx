import styled from 'styled-components';

const S = {
  PopoverWrapper: styled.div`
    position: absolute;
    top: 65px;
    left: -32px;
    background-color: rgb(255, 255, 255);
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 12px 20px 0px;
    z-index: 999999;
    padding: 32px 0px;
    border-radius: 3.2px;
    animation: 0.5s ease-in-out 0s 1 normal none running fadeIn;
  `,
};

export default S;
