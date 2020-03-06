import * as React from 'react';
import Popover from '@/components/common/Popover';

const Main: React.FC = () => {
  const category = 'category';

  return (
    <>
      <Popover mode={category} />
      Main Page
    </>
  );
};

export default Main;
