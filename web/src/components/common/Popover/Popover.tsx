import * as React from 'react';
import Customer from '../Header/Customer';
import GoodsCategory from '../Header/GoodsCategory';
import S from './style';

interface PopoverProps {
  mode: string;
}

const Popover: React.FC<PopoverProps> = ({ mode }) => (
  <>
    <S.PopoverWrapper>
      {mode === 'customer' ? <Customer /> : <GoodsCategory />}
    </S.PopoverWrapper>
  </>
);

export default Popover;
