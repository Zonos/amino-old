import React from "react";

type Props = {
  onClick?: any;
  lastItem?: React.ReactNode;
};

export const List: React.FC<Props> = props => {
  const { children, lastItem } = props;

  return (
    <React.Fragment>
      {children}
      {lastItem}
    </React.Fragment>
  );
};
