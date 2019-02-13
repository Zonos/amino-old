import React from 'react';

type ListProps = {
  store?: any;
  onClick?: any;
  lastItem?: React.ReactNode;
};

export const List: React.SFC<ListProps> = props => {
  const { children, lastItem } = props;

  return (
    <React.Fragment>
      {children}
      {lastItem}
    </React.Fragment>
  );
};
