import React, { ReactNode } from 'react';

interface Props {
  component: ReactNode;
}

export const Default = ({ component }: Props) => {
  return <>{component}</>;
};
