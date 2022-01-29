import React from 'react';

import { Card } from '../../../Card';
import Airplane from '../../../../assets/svg/airplane.svg';

export const CardSkeletons = () => (
  <>
    {Array.apply(null, Array(10)).map((_arbitary: null, index: React.Key) => {
      return <Card key={index} src={Airplane} name={'Loading...'} loading />;
    })}
  </>
);
