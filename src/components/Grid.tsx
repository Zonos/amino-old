import React from "react";
import styled from "styled-components";
import Griddle from "griddle-react";
import { Density } from "../styles/Density";
import { Color } from "../styles/Color";

const StyledGrid = styled.div`
  width: 100%;

  & .griddle-cell {
    padding: 0;
    margin: 0;
    border: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.045);
    font-size: 15px;
    height: 44px;
    color: ${Color.text.base};
    padding: 0 ${Density.spacing.md};
  }

  & .griddle-table {
    width: 100%;
    border-spacing: 0;
    border-radius: 4px;
  }

  & .griddle-table-heading-cell {
    padding: 0;
    margin: 0;
    border: 0;
    padding: 0 ${Density.spacing.md};
    border-bottom: 1px solid rgba(0, 0, 0, 0.045);
    text-align: left;
    color: ${Color.text.base};
    font-size: 15px;
    height: 44px;
    font-weight: 700;
  }

  & .griddle-row {
  }
  & .griddle-row:hover {
    background-color: #fafafa;
    cursor: pointer;
  }
`;

type GridLayoutProps = {
  Table: any;
  Pagination: any;
};

type GridProps = {
  data: any;
};

const GridLayout: React.FC<GridLayoutProps> = props => (
  <div>
    {/*<props.Pagination />*/}
    <props.Table />
  </div>
);

export const Grid: React.FC<GridProps> = props => {
  const { data } = props;

  return (
    <StyledGrid>
      <Griddle components={{ Layout: GridLayout }} data={data} />
    </StyledGrid>
  );
};
