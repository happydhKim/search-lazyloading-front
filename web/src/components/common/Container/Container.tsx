import * as React from 'react';
import S from './style';

interface ContainerProps {
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <S.ContainerWrapper>
    {children}
  </S.ContainerWrapper>
);

export default Container;
